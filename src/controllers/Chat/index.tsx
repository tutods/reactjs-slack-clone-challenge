import { ChatMessage } from 'components/ChatMessage';
import { ChatInput } from 'components/inputs/ChatInput';
import { ChannelDialog } from 'components/modals/ChannelDialog';
import { UserContext } from 'contexts/UserContext';
import firebase from 'firebase';
import { fireStoreDb } from 'firebaseConf';
import { IChat, IMessage } from 'interfaces/IChat';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, useParams } from 'react-router-dom';
import {
	Channel,
	ChannelDetails,
	ChannelInfo,
	ChannelName,
	Container,
	Header,
	Info,
	MessageContainer
} from './styles';

interface IRouteParams {
	channelId: string;
}

// ts-lint:disable-next-line:no-any
interface IChatProps extends RouteComponentProps<any> {}

const Chat: React.FunctionComponent<IChatProps> = ({ history }) => {
	const { channelId } = useParams<IRouteParams>();

	// Contexts
	const { user } = useContext(UserContext);

	const [channel, setChannel] = useState<IChat | undefined>();

	const [modalVisibility, setModalVisibility] = useState(false);

	const [messages, setMessages] = useState<
		firebase.firestore.DocumentData | IMessage[] | undefined
	>([]);

	const sendMessage = (text: string) => {
		if (channelId) {
			const payload = {
				text,
				user: user?.name,
				userImage: user?.photo,
				timestamp: firebase.firestore.Timestamp.now()
			};

			fireStoreDb.collection('rooms').doc(channelId).collection('messages').add(payload);
		}
	};

	// Get Channel and messages every time the channel id change
	useEffect(() => {
		// Get Channel
		fireStoreDb
			.collection('rooms')
			.doc(channelId)
			.onSnapshot((snapshot) => {
				console.log(snapshot.exists);
				if (!snapshot.exists) {
					history.push('/');
				}

				setChannel({
					id: snapshot.id,
					...snapshot.data()
				} as IChat);
			});

		// Get Messages
		fireStoreDb
			.collection('rooms')
			.doc(channelId)
			.collection('messages')
			.orderBy('timestamp', 'asc')
			.onSnapshot((snapshot) => {
				const result = snapshot.docs.map((message) => {
					const { text, user, userImage, timestamp } = message.data();

					return {
						text,
						user,
						userImage,
						timestamp
					};
				});

				setMessages(result);
			});
	}, [channelId, channel]);

	// Redirect if not have id
	if (!channelId) {
		return <Redirect to='/' />;
	}

	return channel ? (
		<Container>
			<ChannelDialog
				channel={channel}
				isOpen={modalVisibility}
				onClose={() => setModalVisibility(false)}
			/>
			<Header>
				<Channel>
					<ChannelName># {channel.name}</ChannelName>
					{channel.description && <ChannelInfo>{channel.description}</ChannelInfo>}
				</Channel>
				<ChannelDetails onClick={() => setModalVisibility(!modalVisibility)}>
					<div>Details</div>

					<Info />
				</ChannelDetails>
			</Header>
			<MessageContainer>
				{messages &&
					messages.map((message: IMessage, index: number) => (
						<ChatMessage key={index} message={message} />
					))}
			</MessageContainer>
			<ChatInput sendFunction={sendMessage} />
		</Container>
	) : (
		<Redirect to='/' />
	);
};

export { Chat };

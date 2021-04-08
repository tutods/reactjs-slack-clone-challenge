import { ChatMessage } from 'components/ChatMessage';
import { ChatInput } from 'components/inputs/ChatInput';
import Loading from 'components/Loading';
import { ChannelDialog } from 'components/modals/ChannelDialog';
import { UserContext } from 'contexts/UserContext';
import firebase from 'firebase';
import { IChannel, IMessage } from 'interfaces/IChannel';
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
interface IChannelProps extends RouteComponentProps<any> {}

const Chat: React.FunctionComponent<IChannelProps> = ({ history }) => {
	const { channelId } = useParams<IRouteParams>();

	const [isLoading, setIsLoading] = useState(true);

	// Contexts
	const { user } = useContext(UserContext);

	const [channel, setChannel] = useState<IChannel>();

	const [modalVisibility, setModalVisibility] = useState(false);

	const [messages, setMessages] = useState<IMessage[]>([]);

	const sendMessage = async (text: string) => {
		if (channelId) {
			const payload = {
				text,
				user: user?.name,
				userImage: user?.photo,
				timestamp: firebase.firestore.Timestamp.now()
			};

			await firebase
				.firestore()
				.collection('channels')
				.doc(channelId)
				.collection('messages')
				.add(payload);
		}
	};

	// Get Channel and messages every time the channel id change
	useEffect(() => {
		// Get Channel
		const fetchData = async () => {
			const channelDoc = firebase.firestore().collection('channels').doc(channelId);
			const channel = await channelDoc.get();

			if (!channel || !channel.exists) {
				return history.push('/');
			}

			setChannel({ id: channel.id, ...channel.data() } as IChannel);
			setIsLoading(true);

			// Get Messages
			const messages = await channelDoc
				.collection('messages')
				.orderBy('timestamp', 'asc')
				.get();

			setMessages(
				messages.docs.map((message) => ({ id: message.id, ...message.data() } as IMessage))
			);
		};

		fetchData();
	}, [channelId, history, messages, isLoading]);

	// Redirect if not have id
	if (!channelId) {
		return <Redirect to='/' />;
	}

	return channel ? (
		<Container>
			<Loading isLoading={isLoading} />
			<ChannelDialog
				channel={channel}
				isOpen={modalVisibility}
				onClose={() => setModalVisibility(false)}
			/>

			<Header>
				<Channel>
					<ChannelName># {channel?.name}</ChannelName>
					{channel?.description && <ChannelInfo>{channel?.description}</ChannelInfo>}
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
		<Loading isLoading={true} />
	);
};

export { Chat };

import { ChatMessage } from 'components/ChatMessage';
import { ChatInput } from 'components/inputs/ChatInput';
import firebase from 'firebase';
import { fireStoreDb } from 'firebaseConf';
import { IChat, IMessage } from 'interfaces/IChat';
import { IUser } from 'interfaces/IUser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

interface IChatProps {
	user: IUser;
}

const Chat: React.FC<IChatProps> = ({ user }) => {
	const { channelId } = useParams<IRouteParams>();

	const [channel, setChannel] = useState<IChat | undefined>();
	const [messages, setMessages] = useState<
		firebase.firestore.DocumentData | IMessage[] | undefined
	>([]);

	const sendMessage = (text: string) => {
		if (channelId) {
			const payload = {
				text,
				user: user.name,
				userImage: user.photo,
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
				setChannel(snapshot.data() as IChat);
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
	}, [channelId]);

	return (
		<Container>
			<Header>
				<Channel>
					<ChannelName># {channel?.name}</ChannelName>
					{channel?.description && <ChannelInfo>{channel?.description}</ChannelInfo>}
				</Channel>
				<ChannelDetails>
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
	);
};

export { Chat };

import { IMessage } from 'interfaces/IChat';
import { Container, MessageContent, Name, Text, UserAvatar } from './styles';

interface IChatMessageProps {
	message: IMessage;
}

const ChatMessage: React.FC<IChatMessageProps> = ({ message }) => {
	return (
		<Container>
			<UserAvatar>
				<img src={message.userImage} alt={message.user} />
			</UserAvatar>
			<MessageContent>
				<Name>
					{message.user}
					<span>{new Date(message.timestamp.toDate()).toLocaleString()}</span>
				</Name>

				<Text>{message.text}</Text>
			</MessageContent>
		</Container>
	);
};

export { ChatMessage };

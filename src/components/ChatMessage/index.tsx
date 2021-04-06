import { Container, MessageContent, Name, Text, UserAvatar } from './styles';

interface IChatMessageProps {}

const ChatMessage = () => {
	return (
		<Container>
			<UserAvatar>
				<img src='https://github.com/tutods.png' alt='Daniel Sousa' />
			</UserAvatar>
			<MessageContent>
				<Name>
					Daniel Sousa
					<span>02/23/2021 11:13:55</span>
				</Name>

				<Text>The best challenge!</Text>
			</MessageContent>
		</Container>
	);
};

export { ChatMessage };

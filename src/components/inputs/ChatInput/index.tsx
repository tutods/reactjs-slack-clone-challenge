import { Send } from '@material-ui/icons';
import React from 'react';
import { Container, InputContainer, SendButton } from './styles';

const ChatInput = () => {
	return (
		<Container>
			<InputContainer>
				<form>
					<input type='text' placeholder='Message here...' />

					<SendButton>
						<Send />
					</SendButton>
				</form>
			</InputContainer>
		</Container>
	);
};

export { ChatInput };

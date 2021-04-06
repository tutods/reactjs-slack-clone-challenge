import { Send } from '@material-ui/icons';
import React, { FormEvent, useState } from 'react';
import { Container, InputContainer, SendButton } from './styles';

interface IChatInputProps {
	sendFunction(text: string): void;
}

const ChatInput: React.FC<IChatInputProps> = ({ sendFunction }) => {
	const [input, setInput] = useState<string | number | readonly string[] | undefined>('');

	const send = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		if (!input) return;

		// Send Message
		sendFunction(String(input));

		// Clear input after submit
		setInput('');
	};

	return (
		<Container>
			<InputContainer>
				<form onSubmit={send}>
					<input
						onChange={(el) => setInput(el.target.value)}
						type='text'
						value={input && input}
						placeholder='Message here...'
					/>

					<SendButton type='submit'>
						<Send />
					</SendButton>
				</form>
			</InputContainer>
		</Container>
	);
};

export { ChatInput };

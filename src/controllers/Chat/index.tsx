import { ChatMessage } from 'components/ChatMessage';
import { ChatInput } from 'components/inputs/ChatInput';
import React from 'react';
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

const Chat = () => {
	return (
		<Container>
			<Header>
				<Channel>
					<ChannelName># Clever</ChannelName>
					<ChannelInfo>Channel description or some text!</ChannelInfo>
				</Channel>
				<ChannelDetails>
					<div>Details</div>

					<Info />
				</ChannelDetails>
			</Header>

			<MessageContainer>
				<ChatMessage />
			</MessageContainer>

			<ChatInput></ChatInput>
		</Container>
	);
};

export { Chat };

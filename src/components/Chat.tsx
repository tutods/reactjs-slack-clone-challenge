import { InfoOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './inputs/ChatInput';

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

const Container = styled.div`
	display: grid;
	grid-template-rows: 64px auto min-content;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 20px;
	box-sizing: border-box;

	border-bottom: 1px solid var(--alt-text-color);
`;

const Channel = styled.div``;

const ChannelName = styled.div`
	font-weight: 700;
`;

const ChannelInfo = styled.div`
	margin-top: 8px;

	font-weight: 400;
	color: var(--alt-text-color);
	font-size: 13px;
`;

const ChannelDetails = styled.div`
	display: flex;
	align-items: center;

	color: var(--gray-color);
	cursor: pointer;
`;

const Info = styled(InfoOutlined)`
	margin-left: 10px;
`;

const MessageContainer = styled.div`
	padding: 10px 0px;
	box-sizing: border-box;
`;

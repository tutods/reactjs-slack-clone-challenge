import { Add, AddCircle } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { channelsItems } from '../ChannelsData';
import { sidebarItems } from '../SidebarData';

const Sidebar = () => {
	return (
		<Container>
			<WorkspaceContainer>
				<Name>CleverProgrammer</Name>
				<NewMessage>
					<AddCircle />
				</NewMessage>
			</WorkspaceContainer>

			<MainChannels>
				{sidebarItems.map((item, index) => (
					<MainChannelItem key={index}>
						{item.icon}
						{item.text}
					</MainChannelItem>
				))}
			</MainChannels>
			<ChannelsContainer>
				<NewChannelContainer>
					<div>Channels</div>
					<Add />
				</NewChannelContainer>

				<ChannelsList>
					{channelsItems.map((channel, index) => (
						<Channel key={index}>{channel.text}</Channel>
					))}
				</ChannelsList>
			</ChannelsContainer>
		</Container>
	);
};

export { Sidebar };

const Container = styled.div`
	background: #3f0e40;
	color: #fff;
	padding: 10px 0;
`;

const WorkspaceContainer = styled.div`
	color: #fff;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 19px;
	border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
	width: 30px;
	height: 30px;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;

	background: #fff;
	color: #3f0e40;
	fill: #3f0e40;

	cursor: pointer;
`;

const MainChannels = styled.div`
	padding-top: 20px;
`;

const MainChannelItem = styled.div`
	height: 28px;

	display: grid;
	grid-template-columns: 15% auto;
	align-items: center;
	padding: 10px 19px;

	color: rgb(188, 171, 188);
	cursor: pointer;

	&:hover {
		background-color: #350d36;
		color: #fff;
	}
`;

const ChannelsContainer = styled.div`
	margin-top: 10px;

	color: rgb(188, 171, 188);
`;

const NewChannelContainer = styled.div`
	height: 28px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 10px 19px;

	border-top: 1px solid #532753;
	border-bottom: 1px solid #532753;
`;

const ChannelsList = styled.div`
	margin-top: 10px;
`;

const Channel = styled.div`
	height: 28px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 10px 19px;

	cursor: pointer;

	&:hover {
		background-color: #350d36;
	}
`;

import { ChannelsContext } from 'contexts/ChannelsContext';
import { sidebarItems } from 'data/SidebarData';
import React, { useContext } from 'react';
import {
	AddChannel,
	Channel,
	ChannelsContainer,
	ChannelsList,
	Container,
	MainChannelItem,
	MainChannels,
	Name,
	NewChannelContainer,
	WorkspaceContainer
} from './styles';

const Sidebar: React.FC = () => {
	const { channels, addChannel } = useContext(ChannelsContext);

	return (
		<Container>
			<WorkspaceContainer>
				<Name>Slack Clone</Name>
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
					<AddChannel onClick={addChannel} />
				</NewChannelContainer>

				<ChannelsList>
					{channels.map((channel, index) => (
						<Channel
							key={index}
							to={`/channels/${channel.id}`}
							activeClassName='active-channel'
						>
							# {channel.name}
						</Channel>
					))}
				</ChannelsList>
			</ChannelsContainer>
		</Container>
	);
};

export { Sidebar };

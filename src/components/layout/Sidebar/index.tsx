import { Add, AddCircle } from '@material-ui/icons';
import { sidebarItems } from 'data/SidebarData';
import firebase from 'firebase';
import { fireStoreDb } from 'firebaseConf';
import React from 'react';
import {
	Channel,
	ChannelsContainer,
	ChannelsList,
	Container,
	MainChannelItem,
	MainChannels,
	Name,
	NewChannelContainer,
	NewMessage,
	WorkspaceContainer
} from './styles';

interface ISidebarProps {
	rooms: firebase.firestore.DocumentData[];
}

const Sidebar: React.FC<ISidebarProps> = ({ rooms }) => {
	const addChannel = () => {
		const promptName = prompt('Enter channel name');
		const promptDescription = prompt('Enter channel description');

		if (promptName) {
			fireStoreDb.collection('rooms').add({
				name: promptName,
				description: promptDescription,
				messages: [{}]
			});
		}
	};

	return (
		<Container>
			<WorkspaceContainer>
				<Name>Clever Programmer</Name>
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
					<Add onClick={addChannel} />
				</NewChannelContainer>

				<ChannelsList>
					{rooms.map((channel, index) => (
						<Channel key={index} to={`/room/${channel.id}`}>
							# {channel.name}
						</Channel>
					))}
				</ChannelsList>
			</ChannelsContainer>
		</Container>
	);
};

export { Sidebar };

import { Add, AddCircle } from '@material-ui/icons';
import firebase from 'firebase';
import React from 'react';
import { sidebarItems } from '../../../data/SidebarData';
import { fireStoreDb } from '../../../firebaseConf';
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

const Sidebar = ({ rooms }: ISidebarProps) => {
	const addChannel = () => {
		const promptName = prompt('Enter channel name');

		if (promptName) {
			fireStoreDb.collection('rooms').add({
				name: promptName
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
						<Channel key={index}># {channel.name}</Channel>
					))}
				</ChannelsList>
			</ChannelsContainer>
		</Container>
	);
};

export { Sidebar };

import { firebase } from 'firebaseConf';
import { IChannel } from 'interfaces/IChannel';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IChannelsContext {
	channels: IChannel[];
	addChannel(): void;
	deleteChannel(id: string): Promise<boolean>;
}

interface IChannelsProviderProps {
	children: ReactNode;
}

export const ChannelsContext = createContext({} as IChannelsContext);

export const ChannelsProvider = ({ children }: IChannelsProviderProps) => {
	const [channels, setChannels] = useState<IChannel[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await firebase.firestore().collection('channels').get();

			setChannels(
				data.docs.map((channel) => ({ id: channel.id, ...channel.data() } as IChannel))
			);
		};

		fetchData();
	}, [channels]);

	const addChannel = async () => {
		const promptName = prompt('Enter channel name');
		const promptDescription = prompt('Enter channel description');

		if (promptName) {
			await firebase.firestore().collection('channels').add({
				name: promptName,
				description: promptDescription
			});
		}
	};

	const deleteChannel = async (id: string) => {
		const docRef = firebase.firestore().collection('channels').doc(id);

		return await docRef
			.delete()
			.then(() => {
				docRef.collection('messages').onSnapshot((messages) => {
					messages.forEach((message) => message.ref.delete());
				});

				return true;
			})
			.catch(() => false);
	};

	return (
		<ChannelsContext.Provider
			value={{
				channels,
				addChannel,
				deleteChannel
			}}
		>
			{children}
		</ChannelsContext.Provider>
	);
};

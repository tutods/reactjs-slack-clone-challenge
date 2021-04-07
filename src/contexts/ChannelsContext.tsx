import { fireStoreDb } from 'firebaseConf';
import { IChat } from 'interfaces/IChat';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IChannelsContext {
	channels: IChat[];
	addChannel(): void;
	deleteChannel(id: string): Promise<boolean>;
}

interface IChannelsProviderProps {
	children: ReactNode;
}

export const ChannelsContext = createContext({} as IChannelsContext);

export const ChannelsProvider = ({ children }: IChannelsProviderProps) => {
	const [channels, setChannels] = useState<IChat[]>([]);

	const getChannels = () => {
		fireStoreDb.collection('rooms').onSnapshot((snapshot) => {
			setChannels(
				snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						name: doc.data().name,
						description: doc.data().description
					} as IChat;
				})
			);
		});
	};

	useEffect(() => {
		getChannels();
	}, []);

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

	const deleteChannel = (id: string) => {
		fireStoreDb
			.collection('rooms')
			.doc(id)
			.collection('messages')
			.onSnapshot((snapshot) => {
				snapshot.forEach((message) => {
					message.ref.delete();
				});
			});

		return fireStoreDb
			.collection('rooms')
			.doc(id)
			.delete()
			.then(() => true)
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

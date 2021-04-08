import { IChannel } from 'interfaces/IChannel';
import React, { useEffect, useState } from 'react';
import { Close, Modal, Overlay } from './styles';

interface IDeleteChannelProps {
	channel: IChannel;
	visible: boolean;
	onClose(): void;
}

const DeleteChannel: React.FC<IDeleteChannelProps> = ({ channel, visible, onClose }) => {
	const [fadeType, setFadeType] = useState<string>('');

	// Close Modal when press ESC key
	const closeOnEscKey = (evt: KeyboardEvent) => {
		if (evt.key === 'Escape') {
			onClose();
		}
	};

	useEffect(() => {
		setTimeout(() => setFadeType('in'), 0);

		window.addEventListener('keydown', closeOnEscKey);

		return () => {
			setFadeType('out');

			window.removeEventListener('keydown', closeOnEscKey);
		};
	}, []);

	if (!visible) {
		return null;
	}

	return (
		<Overlay>
			<Modal fadeType={fadeType}>
				<h2>{channel.name}</h2>

				<Close onClick={onClose}>Fechar</Close>
			</Modal>
		</Overlay>
	);
};

export { DeleteChannel };

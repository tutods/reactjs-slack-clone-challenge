import { SvgIcon } from '@material-ui/core';
import { Cancel, Close, Delete } from '@material-ui/icons';
import { Portal } from 'components/Portal';
import { ChannelsContext } from 'contexts/ChannelsContext';
import { IChannel } from 'interfaces/IChannel';
import React, { useContext, useEffect } from 'react';
import {
	CancelButton,
	CloseButton,
	DeleteButton,
	Modal,
	ModalActions,
	ModalHeader,
	Overlay
} from './styles';

interface IChannelDialogProps {
	channel: IChannel;
	isOpen: boolean;
	onClose(): void;
}

const ChannelDialog: React.FunctionComponent<IChannelDialogProps> = ({
	channel,
	isOpen,
	onClose
}) => {
	const { deleteChannel } = useContext(ChannelsContext);

	useEffect(() => {
		// Close Dialog when press ESC Key
		const closeOnEscKey = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape') {
				onClose();
			}
		};

		window.addEventListener('keydown', closeOnEscKey);

		return () => {
			window.removeEventListener('keydown', closeOnEscKey);
		};
	}, [onClose]);

	const onDelete = () => {
		console.log(channel);

		if (channel && channel.id) {
			deleteChannel(channel.id).then((result) => {
				alert(result ? 'Channel deleted with sucess!' : 'Error on delete channel!');
				onClose();
			});
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<Portal target='modal'>
			<Overlay>
				<Modal>
					<ModalHeader>
						<h2># {channel.name}</h2>
						{channel.description && (
							<p>
								<strong>Description:</strong> {channel.description}
							</p>
						)}
					</ModalHeader>

					<ModalActions>
						<DeleteButton onClick={onDelete}>
							<SvgIcon component={Delete} />
							Delete
						</DeleteButton>
						<CancelButton onClick={onClose}>
							<SvgIcon component={Cancel} />
							Cancel
						</CancelButton>
					</ModalActions>

					<CloseButton onClick={onClose}>
						<SvgIcon component={Close} />
					</CloseButton>
				</Modal>
			</Overlay>
		</Portal>
	);
};

export { ChannelDialog };

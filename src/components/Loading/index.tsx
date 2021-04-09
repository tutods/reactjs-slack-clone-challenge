import { Portal } from 'components/Portal';
import * as React from 'react';
import { Loader, Overlay } from './styles';

interface ILoadingProps {
	isLoading: boolean;
}

const Loading: React.FunctionComponent<ILoadingProps> = ({ isLoading }) => {
	if (!isLoading) {
		return null;
	}

	return (
		<Portal target='loader'>
			<Overlay>
				<Loader>
					<span />
					<span />
					<span />
				</Loader>
			</Overlay>
		</Portal>
	);
};

export default Loading;

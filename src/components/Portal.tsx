import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
	children: ReactNode;
	target: string;
}

const Portal: React.FunctionComponent<IPortalProps> = ({ children, target }) => {
	const element = useRef(document.getElementById(target) || document.createElement('div'));

	useEffect(() => {
		const currentElement = element.current;
		currentElement.id = target;

		document.body.appendChild(currentElement);

		return () => {
			currentElement.parentElement?.removeChild(currentElement);
		};
	}, [target]);

	return createPortal(children, element.current || document.body);
};

export { Portal };

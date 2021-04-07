import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled, { DefaultTheme } from 'styled-components';

type ModalProps = {
	fadeType: string;
	theme: DefaultTheme;
};

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	width: 100%;
	height: 100vh;

	z-index: 10;

	${flexSettings()};
	${flexAlignment('center', 'center')};

	background-color: rgba(0, 0, 0, 0.85);
`;

export const Modal = styled.div<ModalProps>`
	min-width: 25vw;

	${flexSettings('column')};
	${flexAlignment('center', 'center')};

	padding: 40px 20px;
	border-radius: 5px;

	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.boxBackground};

	opacity: ${(props) => {
		switch (props.fadeType) {
			case 'in':
				return '1';
			default:
				return '0';
		}
	}};
	transform: ${(props) => {
		switch (props.fadeType) {
			case 'in':
				return 'translateY(0px)';
			default:
				return 'translateY(-200px)';
		}
	}};
	transition: ${(props) => {
		switch (props.fadeType) {
			case 'in':
				return `all ease-in-out 0.75s;`;
			case 'out':
				return `all ease-in-out 0.75s;`;
			default:
				return '';
		}
	}};
`;

export const Close = styled.button``;

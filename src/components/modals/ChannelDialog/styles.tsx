import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { shade } from 'polished';
import styled from 'styled-components';

export const Overlay = styled.div`
	overflow: none;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	background-color: rgba(0, 0, 0, 0.65);

	z-index: 100;
`;

export const Modal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;

	min-width: 15vw;

	${flexSettings('column')};
	${flexAlignment('center', 'center')};

	padding: 50px 20px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
	border-radius: 5px;

	background-color: ${(props) => props.theme.colors.boxBackground};

	transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
	text-align: center;

	h2 {
		font-weight: 500;
		margin-bottom: 10px;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;

	width: 24px;
	height: 24px;
	border: none;
	border-radius: 50px;

	color: ${(props) => props.theme.colors.text};
	background-color: transparent;
	line-height: 0;
	cursor: pointer;

	> svg {
		width: 20px;
	}

	&:hover {
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => shade(0.25, props.theme.colors.secondary)};
	}

	&:focus {
		outline: transparent;
	}
`;

export const ModalActions = styled.div`
	${flexSettings()};
	${flexAlignment('center', 'center')};

	margin-top: 20px;

	> * + * {
		margin-left: 10px;
	}
`;

export const DeleteButton = styled.button`
	display: inline-flex;
	${flexAlignment('center', 'center')};

	padding: 10px 30px;
	border-radius: 5px;
	border: none;

	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.danger};

	font-size: 14px;
	text-align: center;
	line-height: 0;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => shade(0.15, props.theme.colors.dangerDark)};
	}

	&:focus {
		outline: transparent;
	}

	> svg {
		margin-right: 10px;
		padding: 0;

		width: 14px;
		height: 14px;
	}
`;

export const CancelButton = styled.button`
	display: inline-flex;
	${flexAlignment('center', 'center')};

	padding: 10px 30px;
	border-radius: 5px;
	border: none;

	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => shade(0.35, props.theme.colors.primary)};

	font-size: 14px;
	text-align: center;
	line-height: 0;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => shade(0.55, props.theme.colors.primary)};
	}

	&:focus {
		outline: transparent;
	}

	> svg {
		margin-right: 10px;
		padding: 0;

		width: 14px;
		height: 14px;
	}
`;

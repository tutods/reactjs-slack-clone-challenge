import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 20px 20px;
	box-sizing: border-box;
`;

export const InputContainer = styled.div`
	box-sizing: border-box;

	border-radius: 4px;
	border: 1px solid #8d8d8e;

	> form {
		padding: 0 20px;
		height: 42px;

		display: flex;
		align-items: center;
		justify-content: space-between;

		input {
			flex: 1;

			color: var(--app-text-color);
			font-size: 14px;

			border: none;
			background: transparent;
			outline: none;
		}
	}
`;

export const SendButton = styled.div`
	width: 32px;
	height: 32px;

	${flexSettings()};
	${flexAlignment('center', 'center')};

	margin-left: 10px;

	color: #fff;
	background-color: var(--success-color);
	border-radius: 2px;

	cursor: pointer;

	> .MuiSvgIcon-root {
		width: 18px;
	}

	&:hover {
		background-color: var(--success-dark-color);
	}
`;

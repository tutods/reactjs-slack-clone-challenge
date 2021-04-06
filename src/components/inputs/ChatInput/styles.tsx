import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 20px 10px;
`;

export const InputContainer = styled.div`
	border-radius: 4px;
	border: 1px solid #8d8d8e;

	> form {
		padding: 10px 20px;
		height: 50px;

		display: flex;
		align-items: center;
		justify-content: space-between;

		input {
			flex: 1;

			color: ${(props) => props.theme.colors.text};
			font-size: 14px;

			border: none;
			background: transparent;
			outline: none;
		}
	}
`;

export const SendButton = styled.button`
	width: 32px;
	height: 32px;

	${flexSettings()};
	${flexAlignment('center', 'center')};

	margin-left: 10px;

	color: #fff;
	background-color: ${(props) => props.theme.colors.success};
	border-radius: 2px;
	border: none;

	cursor: pointer;

	> .MuiSvgIcon-root {
		width: 18px;
	}

	&:hover {
		background-color: ${(props) => props.theme.colors.successDark};
		border: none;
	}

	&:focus {
		outline: none;
	}
`;

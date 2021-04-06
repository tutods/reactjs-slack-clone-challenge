import { shade } from 'polished';
import styled from 'styled-components';

export const SwitchTheme = styled.button`
	width: 40px;
	height: 40px;

	border-radius: 50%;
	border: none;
	
	background-color: transparent;
	color: ${(props) => props.theme.colors.white};

	cursor: pointer;
	transition: all 0.5s ease;

	&:focus {
		outline: none;
	}

	&:hover {
		background-color: ${(props) => shade(0.5, props.theme.colors.secondary)};
	}
`;

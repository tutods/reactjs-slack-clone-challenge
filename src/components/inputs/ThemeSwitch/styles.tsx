import { shade } from 'polished';
import styled, { DefaultTheme } from 'styled-components';

type SwitchThemeProps = {
	darkColor: string;
	lightColor: string;
	theme: DefaultTheme;
};

export const SwitchTheme = styled.button<SwitchThemeProps>`
	width: 40px;
	height: 40px;

	border-radius: 50%;
	border: none;

	background-color: transparent;
	color: ${(props) => (props.theme.title === 'light' ? props.lightColor : props.darkColor)};

	cursor: pointer;
	transition: all 0.5s ease;
	line-height: 0;

	&:focus {
		outline: none;
	}

	&:hover {
		background-color: ${(props) => shade(0.5, props.theme.colors.secondary)};
		color: ${(props) => props.theme.colors.white};
	}
`;

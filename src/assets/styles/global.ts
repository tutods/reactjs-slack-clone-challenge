import { shade } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: ${(props) => shade(0.5, props.theme.colors.background)};
		border-radius: 25px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		border-radius: 25px;
		background: ${(props) => shade(0.5, props.theme.colors.secondary)};
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: ${(props) => props.theme.colors.secondary};
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: ${(props) => props.theme.colors.background};
		font-size: 14px;
		color: ${(props) => props.theme.colors.text};
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
		'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	}

`;


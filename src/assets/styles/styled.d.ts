import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			primary: string;
			secondary: string;

			background: string;
			boxBackground: string;
			text: string;

			success: string;
			successDark: string;

			danger: string;
			dangerDark: string;

			white: string;
			black: string;
		};
	}
}

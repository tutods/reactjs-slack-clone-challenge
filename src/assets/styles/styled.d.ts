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
			successDarken: string;

			white: string;
			black: string;
		};
	}
}

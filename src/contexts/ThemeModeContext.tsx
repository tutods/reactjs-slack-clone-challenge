import { darkTheme } from 'assets/styles/theme/dark';
import { lightTheme } from 'assets/styles/theme/light';
import { createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { usePersistedState } from 'utils/hooks/usePersistedState';

interface IThemeModeContext {
	theme: DefaultTheme;
	toggleTheme(): void;
}

interface IThemeModeProviderProps {
	children: ReactNode;
}

export const ThemeModeContext = createContext({} as IThemeModeContext);

export const ThemeModeProvider = ({ children }: IThemeModeProviderProps) => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? darkTheme : lightTheme);
	};

	return (
		<ThemeModeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeModeContext.Provider>
	);
};

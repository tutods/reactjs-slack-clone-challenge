import { EmojiObjects, NightsStayOutlined } from '@material-ui/icons';
import { ThemeModeContext } from 'contexts/ThemeModeContext';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SwitchTheme } from './styles';

interface IThemeSwitchProps {
	lightColor: string;
	darkColor: string;
}

const ThemeSwitch: React.FC<IThemeSwitchProps> = ({ lightColor, darkColor }) => {
	const { title } = useContext(ThemeContext);
	const { toggleTheme } = useContext(ThemeModeContext);

	const icon = title === 'light' ? <NightsStayOutlined /> : <EmojiObjects />;

	return (
		<div>
			<SwitchTheme
				lightColor={lightColor}
				darkColor={darkColor}
				onClick={() => toggleTheme()}
			>
				{icon}
			</SwitchTheme>
		</div>
	);
};

export { ThemeSwitch };

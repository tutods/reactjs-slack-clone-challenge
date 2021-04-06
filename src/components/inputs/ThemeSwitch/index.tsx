import { NightsStayOutlined, WbSunny } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SwitchTheme } from './styles';

interface IThemeSwitchProps {
	toggleTheme(): void;
}

const ThemeSwitch: React.FC<IThemeSwitchProps> = ({ toggleTheme }) => {
	const { title } = useContext(ThemeContext);

	const icon = title === 'light' ? <NightsStayOutlined /> : <WbSunny />;

	return (
		<div>
			<SwitchTheme onClick={() => toggleTheme()}>{icon}</SwitchTheme>
		</div>
	);
};

export { ThemeSwitch };

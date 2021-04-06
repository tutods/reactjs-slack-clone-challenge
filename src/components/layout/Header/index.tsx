import slackLogo from 'assets/media/slack.svg';
import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container, Logo } from './styles';

interface IHeaderProps {
	toggleTheme(): void;
}

const Header: React.FC<IHeaderProps> = ({ toggleTheme }) => {
	const { colors, title } = useContext(ThemeContext);

	return (
		<Container>
			<Logo src={slackLogo} alt='Slack' />

			<Switch
				onChange={toggleTheme}
				checked={title === 'dark'}
				checkedIcon={false}
				uncheckedIcon={false}
				height={10}
				width={40}
				handleDiameter={20}
				offColor={shade(0.25, colors.secondary)}
				onColor={colors.secondary}
			/>
		</Container>
	);
};

export { Header };

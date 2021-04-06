import slackLogo from 'assets/media/slack.svg';
import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container, Content, SignInButton, SlackImg } from './styles';

interface ILoginProps {
	toggleTheme(): void;
}

const Login: React.FC<ILoginProps> = ({ toggleTheme }) => {
	const { colors, title } = useContext(ThemeContext);

	return (
		<Container>
			<Content>
				<SlackImg src={slackLogo} alt='Slack' />
				<Switch
					onChange={toggleTheme}
					checked={title === 'dark'}
					checkedIcon={false}
					uncheckedIcon={false}
					height={10}
					width={40}
					handleDiameter={20}
					offHandleColor={shade(0.05, colors.secondary)}
					offColor={shade(0.25, colors.background)}
					onColor={colors.secondary}
				/>

				<h1>Sign in Slack</h1>

				<SignInButton>Sign In With Google</SignInButton>
			</Content>
		</Container>
	);
};

export { Login };

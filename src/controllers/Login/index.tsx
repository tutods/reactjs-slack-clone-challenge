import slackLogo from 'assets/media/slack.svg';
import { ThemeSwitch } from 'components/inputs/ThemeSwitch';
import { UserContext } from 'contexts/UserContext';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { ThemeContext } from 'styled-components';
import { Container, Content, SignInButton, SlackImg } from './styles';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {
	const { colors } = useContext(ThemeContext);
	const { user, handleLogin } = useContext(UserContext);

	if (user) {
		return <Redirect to='/' />;
	}

	return (
		<Container>
			<Content>
				<SlackImg src={slackLogo} alt='Slack' />
				<ThemeSwitch lightColor={'#000'} darkColor={colors.white} />

				<h1>Sign in Slack</h1>

				<SignInButton onClick={handleLogin}>Sign In With Google</SignInButton>
			</Content>
		</Container>
	);
};

export { Login };

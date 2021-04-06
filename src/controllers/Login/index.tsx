import slackLogo from 'assets/media/slack.svg';
import React from 'react';
import { Container, Content, SignInButton, SlackImg } from './styles';

const Login = () => {
	return (
		<Container>
			<Content>
				<SlackImg src={slackLogo} alt='Slack' />

				<h1>Sign in Slack</h1>

				<SignInButton>Sign In With Google</SignInButton>
			</Content>
		</Container>
	);
};

export { Login };

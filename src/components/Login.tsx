import React from 'react';
import styled from 'styled-components';

const Login = () => {
	return (
		<Container>
			<Content>
				<SlackImg
					src='https://www.flaticon.com/svg/vstatic/svg/2111/2111615.svg?token=exp=1617568625~hmac=8f41c96b9931065c4115c150c064590b'
					alt='Slack'
				/>

				<h1>Sign in Slack</h1>

				<SignInButton>Sign In With Google</SignInButton>
			</Content>
		</Container>
	);
};

export { Login };

const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;

	justify-content: center;
	align-items: center;

	background-color: var(--app-bg-color);
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 40px;
	box-sizing: border-box;
	border-radius: 5px;

	background-color: var(--box-bg-color);
	box-shadow: var(--shadow-color);
	text-align: center;

	> h1 {
		margin-top: 30px;
	}

	> * + * {
		margin-top: 20px;
	}
`;

const SlackImg = styled.img`
	width: 100px;
	height: 100px;
`;

const SignInButton = styled.button`
	background-color: var(--success-color);
	border: none;
`;

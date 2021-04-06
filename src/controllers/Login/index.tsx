import slackLogo from 'assets/media/slack.svg';
import { firebaseAuth, firebaseProvider } from 'firebaseConf';
import { IUser } from 'interfaces/IUser';
import { shade } from 'polished';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container, Content, SignInButton, SlackImg } from './styles';

interface ILoginProps {
	toggleTheme(): void;
	setUser: Dispatch<SetStateAction<IUser | null | undefined>>;
}

const Login: React.FC<ILoginProps> = ({ toggleTheme, setUser }) => {
	const { colors, title } = useContext(ThemeContext);

	const signIn = () => {
		firebaseAuth
			.signInWithPopup(firebaseProvider)
			.then((result) => {
				const user = {
					name: result.user?.displayName,
					photo: result.user?.photoURL
				};

				localStorage.setItem('user', JSON.stringify(user));
				setUser(user as IUser);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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

				<SignInButton onClick={() => signIn()}>Sign In With Google</SignInButton>
			</Content>
		</Container>
	);
};

export { Login };

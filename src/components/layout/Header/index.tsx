import slackLogo from 'assets/media/slack.svg';
import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container, LeftContainer, Logo, Logout, User, UserAvatar } from './styles';

interface IHeaderProps {
	user:
		| {
				name: string;
				photo: string;
		  }
		| undefined;
	logout(): void;
	toggleTheme(): void;
}

const Header: React.FC<IHeaderProps> = ({ toggleTheme, logout, user }) => {
	const { colors, title } = useContext(ThemeContext);

	return (
		<Container>
			<Logo src={slackLogo} alt='Slack' />

			<LeftContainer>
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

				{user && (
					<User>
						<UserAvatar src={user.photo} alt={user.name} />

						{user.name}
					</User>
				)}

				<Logout onClick={logout}>Logout</Logout>
			</LeftContainer>
		</Container>
	);
};

export { Header };

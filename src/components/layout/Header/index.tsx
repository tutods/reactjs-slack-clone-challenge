import slackLogo from 'assets/media/slack.svg';
import { ThemeSwitch } from 'components/inputs/ThemeSwitch';
import React from 'react';
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
	return (
		<Container>
			<Logo src={slackLogo} alt='Slack' />

			<LeftContainer>
				<ThemeSwitch toggleTheme={toggleTheme} />

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

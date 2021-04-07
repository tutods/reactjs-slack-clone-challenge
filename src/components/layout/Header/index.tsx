import slackLogo from 'assets/media/slack.svg';
import { ThemeSwitch } from 'components/inputs/ThemeSwitch';
import { UserContext } from 'contexts/UserContext';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, LeftContainer, Logo, Logout, User, UserAvatar } from './styles';

const Header: React.FC = () => {
	const { colors } = useContext(ThemeContext);
	const { user, logout } = useContext(UserContext);

	return (
		<Container>
			<Logo src={slackLogo} alt='Slack' />

			<LeftContainer>
				<ThemeSwitch lightColor={colors.white} darkColor={colors.white} />

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

import slackLogo from 'assets/media/slack.svg';
import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { darkTheme } from 'assets/styles/theme/dark';
import { lightTheme } from 'assets/styles/theme/light';
import { Header } from 'components/layout/Header';
import { Sidebar } from 'components/layout/Sidebar';
import { Chat } from 'controllers/Chat';
import { Login } from 'controllers/Login';
import firebase from 'firebase';
import { usePersistedState } from 'hooks/usePersistedState';
import { IUser } from 'interfaces/IUser';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/global';
import { firebaseAuth, fireStoreDb } from './firebaseConf';

const App = () => {
	const [rooms, setRooms] = useState<firebase.firestore.DocumentData[]>([]);

	const [user, setUser] = usePersistedState<IUser | null | undefined>('user', null);

	const logout = () => {
		firebaseAuth.signOut().then(() => {
			localStorage.removeItem('user');
			setUser(null);
		});
	};

	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? darkTheme : lightTheme);
	};

	const getChannels = () => {
		fireStoreDb.collection('rooms').onSnapshot((snapshot) => {
			setRooms(
				snapshot.docs.map((doc) => {
					return { id: doc.id, name: doc.data().name };
				})
			);
		});
	};

	useEffect(() => {
		getChannels();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<GlobalStyle />
				<Router>
					{!user ? (
						<Login toggleTheme={toggleTheme} setUser={setUser} />
					) : (
						<Container>
							<Header logout={logout} user={user} toggleTheme={toggleTheme} />
							<Main>
								<Sidebar rooms={rooms} />
								<Switch>
									<Route path='/room/:channelId'>
										<Chat user={user} />
									</Route>
									<Route path='/'>
										<ChannelWarning>
											<Logo src={slackLogo} alt='Slack' />

											<h2>Select or create channel</h2>
											<h3>
												In sidebar you can find the "Channels" section.
												Please, choose one channel to start chatting.
											</h3>
										</ChannelWarning>
									</Route>
								</Switch>
							</Main>
						</Container>
					)}
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default App;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
	display: grid;
	grid-template-columns: 260px auto;

	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
`;

const ChannelWarning = styled.div`
	width: 100%;
	height: calc(100vh - 50px);

	${flexSettings('column')};
	${flexAlignment('center', 'center')};

	padding: 20px;

	text-align: center;

	h2 {
		font-size: 24px;
	}

	h3 {
		font-size: 18px;
		font-weight: 300;
		margin-top: 10px;
	}
`;

const Logo = styled.img`
	width: 200px;

	margin-bottom: 40px;

	animation-name: ckw;
	animation-duration: 15.5s;

	@keyframes ckw {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

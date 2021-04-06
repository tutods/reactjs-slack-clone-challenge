import darkTheme from 'assets/styles/theme/dark';
import lightTheme from 'assets/styles/theme/light';
import { Header } from 'components/layout/Header';
import { Sidebar } from 'components/layout/Sidebar';
import { Chat } from 'controllers/Chat';
import { Login } from 'controllers/Login';
import firebase from 'firebase';
import { usePersistedState } from 'hooks/usePersistedState';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/global';
import { fireStoreDb } from './firebaseConf';

const App = () => {
	const [rooms, setRooms] = useState<firebase.firestore.DocumentData[]>([]);
	const [user, setUser] = useState();

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
					{user ? (
						<Login />
					) : (
						<Container>
							<Header toggleTheme={toggleTheme} />
							<Main>
								<Sidebar rooms={rooms} />
								<Switch>
									<Route path='/room'>
										<Chat />
									</Route>
									<Route path='/'>
										<Login />
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
	grid-template-rows: 38px auto;
`;

const Main = styled.div`
	display: grid;
	grid-template-columns: 260px auto;

	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
`;

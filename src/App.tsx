import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Chat } from './components/Chat';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Login } from './components/Login';
import { fireStoreDb } from './firebase';

const App = () => {
	const [rooms, setRooms] = useState<firebase.firestore.DocumentData[]>([]);
	const [user, setUser] = useState();

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
		<div className='App'>
			<Router>
				{!user ? (
					<Login />
				) : (
					<Container>
						<Header />
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

	background-color: var(--app-bg-color);
	color: var(--app-text-color);
`;

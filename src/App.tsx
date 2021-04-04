import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Chat } from './components/Chat';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Login } from './components/Login';

function App() {
	return (
		<div className='App'>
			<Router>
				<Container>
					<Header />
					<Main>
						<Sidebar />
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
			</Router>
		</div>
	);
}

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

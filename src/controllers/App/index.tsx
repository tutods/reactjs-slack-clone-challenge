import { Header } from 'components/layout/Header';
import { Sidebar } from 'components/layout/Sidebar';
import { ChannelsProvider } from 'contexts/ChannelsContext';
import { Chat } from 'controllers/Chat';
import { NoChannelSelected } from 'controllers/NoChannel';
import { PrivateRoute } from 'utils/PrivateRoute';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AppContainer, Main } from './styles';

const App: React.FC = () => {
	return (
		<div className='App'>
			<Router>
				<AppContainer>
					<Header />
					<Main>
						<ChannelsProvider>
							<Sidebar />
							<Switch>
								{/* Chat Room Route */}
								<PrivateRoute path='/channels/:channelId' component={Chat} />

								<PrivateRoute path='/' component={NoChannelSelected} />
							</Switch>
						</ChannelsProvider>
					</Main>
				</AppContainer>
			</Router>
		</div>
	);
};

export { App };

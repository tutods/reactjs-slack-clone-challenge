import GlobalStyle from 'assets/styles/global';
import { ThemeModeContext } from 'contexts/ThemeModeContext';
import { UserProvider } from 'contexts/UserContext';
import { App } from 'controllers/App';
import { Login } from 'controllers/Login';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PrivateRoute } from 'utils/PrivateRoute';

const Main: React.FC = () => {
	const { theme } = useContext(ThemeModeContext);

	return (
		<ThemeProvider theme={theme}>
			<UserProvider>
				<GlobalStyle />
				<Router>
					<Switch>
						{/* Login Route */}
						<Route path='/login' component={Login} />

						<PrivateRoute path='/' component={App} />
					</Switch>
				</Router>
			</UserProvider>
		</ThemeProvider>
	);
};

export { Main };

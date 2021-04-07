import { UserContext } from 'contexts/UserContext';
import { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

interface IPrivateRouteProps extends RouteProps {
	// tslint:disable-next-line:no-any
	component: any;
}

const PrivateRoute = ({ component: RouteComponent, ...rest }: IPrivateRouteProps) => {
	const { user } = useContext(UserContext);

	return (
		<Route
			{...rest}
			render={(routeProps) =>
				!!user ? <RouteComponent {...routeProps} /> : <Redirect to={'/login'} />
			}
		/>
	);
};

export { PrivateRoute };

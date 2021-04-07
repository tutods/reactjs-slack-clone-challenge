import { firebaseAuth, firebaseProvider } from 'firebaseConf';
import { usePersistedState } from 'utils/hooks/usePersistedState';
import { IUser } from 'interfaces/IUser';
import { createContext, ReactNode } from 'react';

interface IUserContext {
	user: IUser | null | undefined;
	handleLogin: () => void;
	logout: () => void;
}

interface IUserProviderProps {
	children: ReactNode;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
	const [user, setUser] = usePersistedState<IUser | null | undefined>('user', null);

	const handleLogin = () => {
		firebaseAuth
			.signInWithPopup(firebaseProvider)
			.then((result) => {
				const user = {
					name: result.user?.displayName,
					photo: result.user?.photoURL
				};

				localStorage.setItem('user', JSON.stringify(user));
				setUser(user as IUser);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	const logout = () => {
		firebaseAuth.signOut().then(() => {
			localStorage.removeItem('user');
			setUser(null);
		});
	};

	return (
		<UserContext.Provider
			value={{
				user,
				handleLogin,
				logout
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

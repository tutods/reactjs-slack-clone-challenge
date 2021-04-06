import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	${flexSettings()};
	${flexAlignment('center', 'center')};

	background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
	${flexSettings('column')};
	${flexAlignment('center', 'center')};

	padding: 100px;
	border-radius: 10px;

	background-color: ${(props) => props.theme.colors.boxBackground};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
	text-align: center;

	> h1 {
		font-weight: 300;
	}

	> * + * {
		margin-top: 30px;
	}
`;

export const SlackImg = styled.img`
	width: 100px;
	height: 100px;
`;

export const SignInButton = styled.button`
	padding: 10px 40px;

	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.success};
	border: none;
	border-radius: 5px;

	font-size: 14px;
	font-weight: 500;
	cursor: pointer;
	outline: none;

	transition: 0.5s ease-in-out background-color;

	&:hover {
		background-color: ${(props) => props.theme.colors.successDark};
	}
`;

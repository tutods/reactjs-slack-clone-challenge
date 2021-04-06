import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;

	justify-content: center;
	align-items: center;

	background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
	${flexSettings('column')};
	${flexAlignment('center', 'center')};

	padding: 40px;
	box-sizing: border-box;
	border-radius: 5px;

	background-color: ${(props) => props.theme.colors.boxBackground};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
	text-align: center;

	> h1 {
		margin-top: 30px;
	}

	> * + * {
		margin-top: 20px;
	}
`;

export const SlackImg = styled.img`
	width: 100px;
	height: 100px;
`;

export const SignInButton = styled.button`
	padding: 10px 40px;
	box-sizing: border-box;

	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.success};
	border: none;

	font-size: 14px;
	font-weight: 600;

	&:hover {
		background-color: ${(props) => props.theme.colors.successDarken};
	}
`;

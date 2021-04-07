import styled from 'styled-components';

export const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: 38px minmax(0, 1fr);
`;

export const Main = styled.div`
	display: grid;
	grid-template-columns: 260px auto;

	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
`;

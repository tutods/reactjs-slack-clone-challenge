import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	/* position: relative; */
	z-index: 10;

	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	padding: 0 20px;
	box-sizing: border-box;

	background-color: ${(props) => shade(0.25, props.theme.colors.primary)};
	color: ${(props) => props.theme.colors.white};

	box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.01);
`;

export const Logo = styled.img`
	width: 25px;
	height: auto;
`;

export const Main = styled.div`
	display: flex;
	align-items: center;
	margin-right: 16px;
	margin-left: 16px;
`;

export const SearchContainer = styled.div`
	min-width: 400px;
	margin-left: 16px;
	margin-right: 16px;
`;

export const Search = styled.div`
	box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.white};
	width: 100%;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;

	input {
		background-color: transparent;
		border: none;
		padding-left: 8px;
		padding-right: 8px;
		padding-top: 4px;
		padding-bottom: 4px;
		color: ${(props) => props.theme.colors.white};
		width: 85%;

		&::placeholder {
			color: ${(props) => props.theme.colors.white};
		}

		&:focus {
			outline: none;
		}
	}
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
	padding-right: 16px;
	position: absolute;
	right: 0;
`;

export const Name = styled.div`
	padding-right: 16px;
`;

export const UserImage = styled.div`
	width: 28px;
	height: 28px;
	border: 2px solid ${(props) => props.theme.colors.white};
	border-radius: 3px;

	img {
		width: 100%;
		height: 100%;
	}
`;

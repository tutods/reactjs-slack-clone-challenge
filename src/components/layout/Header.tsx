import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<Container>
			<Main>
				<AccessTimeIcon />

				<SearchContainer>
					<Search>
						<input type='text' placeholder='Search...' />
					</Search>
				</SearchContainer>

				<HelpOutlineIcon />
			</Main>
			<UserContainer>
				<Name>Daniel Sousa</Name>

				<UserImage>
					<img src='http://github.com/tutods.png' alt='Daniel Sousa' />
				</UserImage>
			</UserContainer>
		</Container>
	);
};

export { Header };

const Container = styled.div`
	position: relative;
	z-index: 10;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #350d36;
	color: #fff;
	box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
`;

const Main = styled.div`
	display: flex;
	align-items: center;
	margin-right: 16px;
	margin-left: 16px;
`;

const SearchContainer = styled.div`
	min-width: 400px;
	margin-left: 16px;
	margin-right: 16px;
`;

const Search = styled.div`
	box-shadow: inset 0 0 0 1px rgb(104, 74, 104);
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
		color: #fff;
		width: 85%;
	}

	input:focus {
		outline: none;
	}
`;

const UserContainer = styled.div`
	display: flex;
	align-items: center;
	padding-right: 16px;
	position: absolute;
	right: 0;
`;

const Name = styled.div`
	padding-right: 16px;
`;

const UserImage = styled.div`
	width: 28px;
	height: 28px;
	border: 2px solid white;
	border-radius: 3px;

	img {
		with: 100%;
		height: 100%;
	}
`;

import { AddCircle } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
	return (
		<Container>
			<WorkspaceContainer>
				<Name>CleverProgrammer</Name>
				<NewMessage>
					<AddCircle />
				</NewMessage>
			</WorkspaceContainer>
		</Container>
	);
};

export { Sidebar };

const Container = styled.div`
	background: #3f0e40;
	color: #fff;
	padding: 10px 0;
`;

const WorkspaceContainer = styled.div`
	color: #fff;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 19px;
	border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
	width: 36px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

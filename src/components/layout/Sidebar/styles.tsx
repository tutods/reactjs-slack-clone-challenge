import { Add } from '@material-ui/icons';
import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { shade } from 'polished';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	background: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.white};
	padding: 10px 0;
`;

export const WorkspaceContainer = styled.div`
	color: ${(props) => props.theme.colors.white};
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 19px;
	border-bottom: 1px solid ${(props) => shade(0.5, props.theme.colors.primary)};
`;

export const Name = styled.div`
	font-weight: 700;
`;

export const MainChannels = styled.div`
	padding-top: 20px;
`;

export const MainChannelItem = styled.div`
	/* height: 28px; */

	display: grid;
	grid-template-columns: 15% auto;
	align-items: center;
	padding: 10px 19px;

	color: ${(props) => shade(0.25, props.theme.colors.white)};
	cursor: pointer;

	&:hover {
		background-color: ${(props) => shade(0.25, props.theme.colors.primary)};
		color: ${(props) => props.theme.colors.white};
	}
`;

export const ChannelsContainer = styled.div`
	margin-top: 10px;
`;

export const NewChannelContainer = styled.div`
	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	padding: 10px 19px;

	border-top: 1px solid ${(props) => shade(0.5, props.theme.colors.primary)};
	border-bottom: 1px solid ${(props) => shade(0.5, props.theme.colors.primary)};

	font-weight: 700;
`;

export const AddChannel = styled(Add)`
	padding: 2px;
	border-radius: 25px;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => shade(0.5, props.theme.colors.secondary)};
	}
`;

export const ChannelsList = styled.div`
	margin-top: 10px;
`;

export const Channel = styled(NavLink)`
	position: relative;

	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	padding: 10px 19px;

	color: ${(props) => shade(0.25, props.theme.colors.white)};

	cursor: pointer;
	text-decoration: none;

	&:hover {
		background-color: ${(props) => shade(0.25, props.theme.colors.primary)};
		color: ${(props) => props.theme.colors.white};
	}

	&.${(props) => props.activeClassName} {
		background-color: ${(props) => shade(0.25, props.theme.colors.primary)};
		color: ${(props) => props.theme.colors.white};

		font-weight: 600;

		&::before {
			content: '';

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;

			width: 5px;
			background-color: ${(props) => props.theme.colors.secondary};
		}
	}
`;

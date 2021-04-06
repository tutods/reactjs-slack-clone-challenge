import { InfoOutlined } from '@material-ui/icons';
import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 64px auto min-content;
`;

export const Header = styled.div`
	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	padding: 0 20px;
	box-sizing: border-box;

	border-bottom: 1px solid var(--alt-text-color);
`;

export const Channel = styled.div``;

export const ChannelName = styled.div`
	font-weight: 700;
`;

export const ChannelInfo = styled.div`
	margin-top: 8px;

	font-weight: 400;
	color: var(--alt-text-color);
	font-size: 13px;
`;

export const ChannelDetails = styled.div`
	${flexSettings()};
	${flexAlignment()};

	color: var(--gray-color);
	cursor: pointer;
`;

export const Info = styled(InfoOutlined)`
	margin-left: 10px;
`;

export const MessageContainer = styled.div`
	padding: 10px 0px;
	box-sizing: border-box;
`;

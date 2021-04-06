import { InfoOutlined } from '@material-ui/icons';
import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 64px auto min-content;
	min-height: 0;

	padding: 20px 0;
`;

export const Header = styled.div`
	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	padding: 0 20px 10px;

	border-bottom: 1px solid ${(props) => props.theme.colors.text};
`;

export const Channel = styled.div``;

export const ChannelName = styled.div`
	font-weight: 700;
`;

export const ChannelInfo = styled.div`
	margin-top: 8px;

	font-weight: 400;
	color: ${(props) => props.theme.colors.text};
	font-size: 13px;
`;

export const ChannelDetails = styled.div`
	${flexSettings()};
	${flexAlignment()};

	color: ${(props) => shade(-1, props.theme.colors.text)};
	cursor: pointer;
`;

export const Info = styled(InfoOutlined)`
	margin-left: 10px;
`;

export const MessageContainer = styled.div`
	${flexSettings('column')};
	overflow-y: scroll;

	padding: 10px 0px;
	margin-bottom: 20px;
`;

import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	z-index: 10;
	height: 50px;

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

export const User = styled.div`
	${flexSettings()};
	${flexAlignment()};

	margin-left: 20px;

	font-weight: 600;
`;

export const UserAvatar = styled.img`
	border: 2px solid ${(props) => props.theme.colors.white};
	border-radius: 100%;
	width: 26px;
	height: 26px;

	margin-right: 10px;
`;

export const LeftContainer = styled.div`
	${flexSettings()};
	${flexAlignment()};
`;

export const Logout = styled.span`
	margin-left: 30px;
	color: ${(props) => props.theme.colors.danger};
	font-weight: 800;
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.colors.dangerDark};
	}
`;

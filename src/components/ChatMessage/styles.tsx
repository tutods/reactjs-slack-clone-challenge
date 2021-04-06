import { flexSettings } from 'assets/styles/mixins';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	padding: 8px 20px;
	box-sizing: border-box;

	&:hover {
		background-color: var(--box-bg-color);
	}
`;

export const UserAvatar = styled.div`
	width: 40px;
	height: 40px;

	border-radius: 2px;
	overflow: hidden;

	> img {
		width: 100%;
	}
`;

export const MessageContent = styled.div`
	${flexSettings('column')};

	margin-left: 10px;
`;

export const Name = styled.span`
	font-weight: 700;
	font-size: 15px;
	line-height: 1.4;

	> span {
		margin-left: 10px;

		font-size: 13px;
		font-weight: 400;
		color: ${(props) => shade(0.25, props.theme.colors.text)};
	}
`;

export const Text = styled.span`
	margin-top: 2px;
`;

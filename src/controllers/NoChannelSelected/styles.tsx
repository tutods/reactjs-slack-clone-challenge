import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const ChannelWarning = styled.div`
	width: 100%;
	height: calc(100vh - 50px);

	${flexSettings('column')};
	${flexAlignment('center', 'center')};

	padding: 20px;

	text-align: center;

	h2 {
		font-size: 24px;
	}

	h3 {
		font-size: 18px;
		font-weight: 300;
		margin-top: 10px;
	}
`;

export const Logo = styled.img`
	width: 200px;

	margin-bottom: 40px;

	animation: logo-spin infinite 20s linear;

	@keyframes logo-spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;

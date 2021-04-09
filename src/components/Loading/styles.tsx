import styled from 'styled-components';

export const Overlay = styled.div`
	overflow: none;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	background-color: rgba(0, 0, 0, 0.75);

	z-index: 100;
`;

export const Loader = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 50%);

	> * {
		display: inline-block;
		width: 10px;
		height: 10px;
		border-radius: 100%;
		background: ${(props) => props.theme.colors.white};
		opacity: 0.6;

		&:nth-child(1) {
			animation: bump1 1s cubic-bezier(0.62, 0.25, 0.53, 0.98) infinite;
		}

		&:nth-child(2) {
			animation: bump2 1s cubic-bezier(0.62, 0.25, 0.53, 0.98) infinite;
		}

		&:nth-child(3) {
			animation: bump3 1s cubic-bezier(0.62, 0.25, 0.53, 0.98) infinite;
		}

		+ * {
			margin-left: 10px;
		}
	}

	@keyframes bump1 {
		40% {
			transform: scale(1, 1);
		}

		70% {
			transform: scale(1.6, 1.6);
			opacity: 1;
		}

		80% {
			transform: scale(1, 1);
		}
	}

	@keyframes bump2 {
		50% {
			transform: scale(1, 1);
		}

		80% {
			transform: scale(1.6, 1.6);
			opacity: 1;
		}

		90% {
			transform: scale(1, 1);
		}
	}

	@keyframes bump3 {
		60% {
			transform: scale(1, 1);
		}

		90% {
			transform: scale(1.6, 1.6);
			opacity: 1;
		}

		100% {
			transform: scale(1, 1);
		}
	}
`;

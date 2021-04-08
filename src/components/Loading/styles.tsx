import styled from 'styled-components';

export const Overlay = styled.div`
	overflow: none;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	background-color: rgba(0, 0, 0, 0.95);

	z-index: 100;
`;

export const Loader = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 50%);

	color: ${(props) => props.theme.colors.white};

	font-size: 10px;
	position: relative;
	text-indent: -9999em;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;

	border-radius: 100%;
	width: 20px;
	height: 20px;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
	-webkit-animation: load7 1.8s infinite ease-in-out;
	animation: load7 1.8s infinite ease-in-out;

	&:before,
	&:after {
		border-radius: 100%;
		width: 20px;
		height: 20px;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation: load7 1.8s infinite ease-in-out;
		animation: load7 1.8s infinite ease-in-out;
		content: '';
		position: absolute;
		top: 0;
	}

	&:before {
		left: -30px;
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}

	&:after {
		left: 30px;
	}

	@-webkit-keyframes load7 {
		0%,
		80%,
		100% {
			box-shadow: 0 20px 0 -10px;
		}
		40% {
			box-shadow: 0 20px 0 0;
		}
	}
	@keyframes load7 {
		0%,
		80%,
		100% {
			box-shadow: 0 20px 0 -10px;
		}
		40% {
			box-shadow: 0 20px 0 0;
		}
	}
`;

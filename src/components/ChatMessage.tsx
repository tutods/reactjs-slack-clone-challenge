import styled from 'styled-components';

interface IChatMessageProps {}

const ChatMessage = () => {
	return (
		<Container>
			<UserAvatar>
				<img src='https://github.com/tutods.png' alt='Daniel Sousa' />
			</UserAvatar>
			<MessageContent>
				<Name>
					Daniel Sousa
					<span>02/23/2021 11:13:55</span>
				</Name>

				<Text>The best challenge!</Text>
			</MessageContent>
		</Container>
	);
};

export { ChatMessage };

const Container = styled.div`
	display: flex;

	padding: 8px 20px;
	box-sizing: border-box;
`;

const UserAvatar = styled.div`
	width: 36px;
	height: 36px;

	border-radius: 2px;
	overflow: hidden;

	> img {
		width: 100%;
	}
`;

const MessageContent = styled.div`
	display: flex;
	flex-direction: column;

	margin-left: 10px;
`;

const Name = styled.span`
	font-weight: 700;
	font-size: 15px
	line-height: 1.4;

	> span {
		margin-left: 10px;

		font-size: 13px;
		font-weight: 400;
		color: var(--gray-color);
	}
`;

const Text = styled.span``;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

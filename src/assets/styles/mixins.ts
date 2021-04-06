export const flexSettings = (direction = 'row') => {
	return `
		display: flex;
		flex-direction: ${direction}
	`;
};

export const flexAlignment = (align = 'center', justify = 'flex-start') => {
	return `
		align-items: ${align};
		justify-content: ${justify}
	`;
};

export const coverBg = () => {
	return `
		background-repeat: no-repeat
		background-size: cover
		background-position: center
	`;
};

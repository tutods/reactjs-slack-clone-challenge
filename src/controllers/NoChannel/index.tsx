import slackLogo from 'assets/media/slack.svg';
import React from 'react';
import { ChannelWarning, Logo } from './styles';

const NoChannelSelected = () => {
	return (
		<ChannelWarning>
			<Logo src={slackLogo} alt='Slack' />

			<h2>Select or create channel</h2>
			<h3>
				In sidebar you can find the "Channels" section. Please, choose one channel to start
				chatting.
			</h3>
		</ChannelWarning>
	);
};

export { NoChannelSelected };

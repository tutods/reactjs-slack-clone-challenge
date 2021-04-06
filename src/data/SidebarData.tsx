import { Apps, Bookmark, Drafts, Inbox, Message, People } from '@material-ui/icons';
import React from 'react';

export const sidebarItems = [
	{
		icon: <Message />,
		text: 'Thread'
	},
	{
		icon: <Inbox />,
		text: 'All DMs'
	},
	{
		icon: <Drafts />,
		text: 'Mentions & Reactions'
	},
	{
		icon: <Bookmark />,
		text: 'Save Items'
	},
	{
		icon: <People />,
		text: 'Peoples & Groups'
	},
	{
		icon: <Apps />,
		text: 'More'
	}
];

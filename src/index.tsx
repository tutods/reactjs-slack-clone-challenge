import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import { Main } from 'controllers/Main';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<ThemeModeProvider>
		<Main />
	</ThemeModeProvider>,
	document.getElementById('root')
);

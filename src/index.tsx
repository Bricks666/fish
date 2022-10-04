import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { store } from './models';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);

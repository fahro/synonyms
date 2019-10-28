import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<App />
	</BrowserRouter>,
	document.querySelector('#root')
);

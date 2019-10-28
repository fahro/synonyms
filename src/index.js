import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<HashRouter basename="/">
		<App />
	</HashRouter>,
	document.querySelector('#root')
);

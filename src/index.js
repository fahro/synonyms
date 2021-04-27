import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter basename="">
		<App />
	</BrowserRouter>,
	document.querySelector('#root')
);

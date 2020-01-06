import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { Router } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Routes from './components/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        <Header />
        <Routes />
        <Footer />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

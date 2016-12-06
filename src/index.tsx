import { history } from 'react-router/lib/PropTypes';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);

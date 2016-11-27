import Home from './pages/Home';
import { RouteProps, Router } from 'react-router';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const appElement = document.getElementById('content');
const app = (
    <Home />
);
ReactDOM.render(app, appElement);






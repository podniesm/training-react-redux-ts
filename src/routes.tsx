import * as path from 'path';
import * as React from 'react';
import { Link } from 'react-router';
import { IndexRoute, Route } from 'react-router';
import AboutPage from './components/about/AboutPage';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='courses' component={CoursesPage} />
        <Route path='about' component={AboutPage} />
    </Route>
);

import * as React from 'react';
import { Link } from 'react-router';

const HomePage = (): JSX.Element => {
    return (
        <div className='jumbotron'>
            <h1>R-R Administration</h1>
            <p>R-R React-Redux in Typescript</p>
            <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
        </div>
    );
};

export default HomePage;

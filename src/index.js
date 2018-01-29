import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from './containers/App/App.jsx';
import './assets/styles/styles.css';

ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));

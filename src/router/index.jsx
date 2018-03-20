import React from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import Login from '../views/login/index';
import Register from '../views/register';
import Dashboard from '../layout/Dashboard';

const router = () => (
        <Router>
            <div>
                <Route path="/" exact component={Login} />
                <Route path='/dash/:comp' component={Dashboard} />
                <Route path='/test' component={Login} />
                <Route path='/register' component={Register} />
            </div>
        </Router>
)

export default router;

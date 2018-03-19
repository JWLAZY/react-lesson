import React from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import Login from '../views/login/index';
import Register from '../views/register';

const router = () => (
        <Router>
            <div>
                <Route path="/" exact component={Login} />
                <Route path='/test' component={Login} />
                <Route path='/register' component={Register} />
            </div>
            
        </Router>
)

export default router;

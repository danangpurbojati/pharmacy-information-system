import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import Admin from './pages/Admin';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>  
        </Router>
    )
}

export default App
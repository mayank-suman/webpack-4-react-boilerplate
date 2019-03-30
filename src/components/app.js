import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { View1 } from "./views/route1";
import { View2 } from "./views/route2";
export const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/route">route 2</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route path='/' exact component={View1} />
                    <Route path='/route' component={View2} />
                </Switch>
            </div>
        </Router>
        );
};



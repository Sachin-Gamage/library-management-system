/* tslint:disable */
import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AddItem } from './components/addItem';

export class Container extends React.Component<{},{}>{

    public render(){
        return (
        <Router>
            <div>
            <div className="header">
              <h1>Library Management System</h1>
            </div>
            <div className="navbar">
                    <Link to="/addItem">Add New Item</Link>
                    <Link to="/deleteItem">Delete Items</Link>
                    <Link to="/viewItems">View Items</Link>
                    <Link to="/BurrowItems">Burrow Item</Link>
                    <Link to="/ReturnItem">Return Item</Link>
                    <Link to="Reports">Reports</Link>
                    <Route exact path="/addItem" component={AddItem} />
                    <Route path="/deleteItem" component={AddItem} />
                    <Route path="/viewItems" component={AddItem} />
                    <Route path="/BurrowItems" component={AddItem} />
                    <Route path="/ReturnItem" component={AddItem} />
                    <Route path="/Reports" component={AddItem} />
            </div>
          </div>
        </Router>
        );
    }
}
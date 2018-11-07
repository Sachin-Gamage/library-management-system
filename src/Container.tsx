/* tslint:disable */
import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AddItem } from './components/addItem';

export class Container extends React.Component<{},{}>{

    public render(){
        return <div>
            <div className="header">
              <h1>Library Management System</h1>
            </div>
            <div className="navbar">
                <Router>
                    <Link to="/">Home</Link>
                    <a href="addItem.html" className="active">
                        Add New Item
                    </a>
                    <a href="deleteItem.html">Delete Items</a>
                    <a href="viewItem.html">View Items</a>
                    <a href="burrowItem.html">Burrow Item</a>
                    <a href="returnItem.html">Return Item</a>
                    <a href="report.html">Reports</a>

                    <Route exact path="/" component={AddItem} />
                </Router>
            </div>
          </div>;
            
    }
}
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Resources from './Resources';
import Map from './Map';
import GuestList from './GuestList';
import GuestDetail from './GuestDetail';

export default class App extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/map">Map</Link><br/>
                <Link to="/resources">Resources</Link><br/>
                <Link to="/guestlist">Guestlist</Link>
                <p>App goes here.</p>
                <Route path="/map" component={Map}/>
                <Route path="/resources" component={Resources}/>
                <Route path="/guestlist" component={GuestList}/>
                <Route path="/guestdetail/:guestId" component={GuestDetail}/>
            </div>
        );
    }

}
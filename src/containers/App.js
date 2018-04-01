import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Resources from './Resources';
import Map from './Map';
import GuestList from './GuestList';
import GuestDetail from './GuestDetail';

/*
@connect((store) => {
    return {
        guests: store.guests
    }
})
@withRouter
*/
class App extends Component {
    render() {
        return (
            <div>
                <Link to="/map">Map</Link><br/>
                <Link to="/resources">Resources</Link><br/>
                <Link to="/guestlist">Guestlist</Link>
                <Route path="/map" component={Map}/>
                <Route path="/resources" component={Resources}/>
                <Route path="/guestlist" component={GuestList}/>
                <Route path="/guestdetail/:guestId" component={GuestDetail}/>
            </div>
        );
    }
}

export default withRouter(connect((store) => {
    return {
        guests: store.guests
    }
})(App))
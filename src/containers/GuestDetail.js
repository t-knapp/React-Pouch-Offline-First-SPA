import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import _ from 'lodash';

@connect((store) => {
    return {
        guests: store.GuestReducer.guests
    }
})
@withRouter
export default class GuestDetail extends Component {

    constructor(params) {
        super(params);
        console.log('params', params);
    }

    render() {
        const guestId = parseInt(this.props.match.params.guestId);
        /*
        const guest = _.find(this.props.guests, function(item) {
            return item.guestId === guestId;
        });
        */
        //const guest = _.find(this.props.guests, {'guestId': guestId});
        const guest = _.find(this.props.guests, ['guestId', guestId]);
        return (
            <div>
                <h2>GuestDetail: {guestId}</h2>
                <p>
                    Name: {guest.name}
                </p>
                <p>
                    Lastname: {guest.lastname}
                </p>
                <p>
                    Section: {guest.section}
                </p>
                <p>
                    State: {guest.state}
                </p>
            </div>
        );
    }
}
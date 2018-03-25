import React, { Component } from 'react';

export default class GuestDetail extends Component {

    constructor(params) {
        super(params);
        console.log('params', params);
    }

    render() {
        console.log(this.props);
        const guestId = this.props.match.params.guestId;
        return (
            <div>
                <h2>GuestDetail: {guestId}</h2>
            </div>
        );
    }

}
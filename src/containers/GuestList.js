import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import randomstring from 'randomstring';

import { fetchGuestList, addGuest, deleteGuest } from './../actions/GuestActions';

@connect((store) => {
    return {
        guests: store.GuestReducer.guests
    }
})
@withRouter
export default class GuestList extends Component {

    componentWillMount() {
        this.props.dispatch(fetchGuestList());
    }

    addGuest() {
        var newGuest = {
            guestId: Math.floor(Math.random() * 1000),
            name: randomstring.generate(7),
            lastname: randomstring.generate(7),
            section: "Nord",
            state: "Waiting"
        }
        this.props.dispatch(addGuest(newGuest))
    }

    guestDetails(a, b, c) {
        console.log('guestDetails', a, b, c);
    }

    deleteGuest(guestId) {
        this.props.dispatch(deleteGuest(guestId));
    }

    render() {
        const rows = this.props.guests.map((guest) => 
            <tr key={guest.guestId}>
                <td>{guest.guestId}</td>
                <td>{guest.state}</td>
                <td>{guest.lastname}, {guest.name}</td>
                <td>{guest.section}</td>
                <td>
                    <button onClick={() => this.guestDetails(guest.guestId)}>Details</button>
                    <button onClick={() => this.deleteGuest(guest.guestId)}>Delete</button>
                </td>
            </tr>
        )

        return (
            <div>
                <h2>GuestList</h2>
                <button onClick={this.addGuest.bind(this)}>Add Guest</button>
                <table>
                    <thead>
                        <tr>
                            <th>Guest #</th>
                            <th>State</th>
                            <th>Lastname, Name</th>
                            <th>Section</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }

}
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        guests: store.guests
    }
})
@withRouter
export default class GuestList extends Component {

    render() {

        const rows = this.props.guests.map((guest) => 
            <tr>
                <td>{guest.guestId}</td>
                <td>{guest.state}</td>
                <td>{guest.lastname}, {guest.name}</td>
                <td>{guest.section}</td>
            </tr>
        )

        return (
            <div>
                <h2>GuestList</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Guest #</th>
                            <th>State</th>
                            <th>Lastname, Name</th>
                            <th>Section</th>
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
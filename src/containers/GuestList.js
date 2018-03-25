import React, { Component } from 'react';

export default class GuestList extends Component {

    render() {
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
                        <tr>
                            <td>3142</td>
                            <td>Waiting</td>
                            <td>Klopp, Jürgen</td>
                            <td>West</td>
                        </tr>
                        <tr>
                            <td>561</td>
                            <td>Waiting</td>
                            <td>Landa, Hans-Joachim</td>
                            <td>Süd</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}
import React from 'react';

export class Todo extends React.Component {
    render() {
        return <tr>
            <td style={{ border: "1px solid black;" }}>{this.props.title}</td>
            <td style={{ border: "1px solid black;" }}>{this.props.children}</td>
        </tr>

    }
}
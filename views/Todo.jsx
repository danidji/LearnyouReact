import React from 'react';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    handleChange(e) {
        this.setState({ checked: e.target.checked })
    }

    render() {
        return (

            <tr>
                <td style={{ border: "1px solid black;" }}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)} />
                </td>
                <td style={{ border: "1px solid black;" }}>{this.props.title}</td>
                <td style={{ border: "1px solid black;" }}>{this.props.children}</td>
            </tr>
        )

    }
}
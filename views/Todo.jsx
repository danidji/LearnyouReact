import React from 'react';

let style = {
    border: "1px solid black;"
};

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
                {console.log('data', this.props.data)}
                <td style={style}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)} />
                </td>
                <td style={style}>{this.props.title}</td>
                <td style={style}>{this.props.children}</td>
            </tr>
        )

    }
}
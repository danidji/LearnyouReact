import React from 'react';
import { Todo } from './Todo'
import PropTypes from 'prop-types';

export class TodoList extends React.Component {
    render() {
        let todo = this.props.data.map((obj) => {
            return (
                <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
            )
        })

        return <div className="todoList">
            <table style={{ border: "2px solid black;" }}>
                <tbody>
                    {todo}
                </tbody>
            </table>
        </div>
    }


}
Todo.propTypes = {
    title: PropTypes.string.isRequired
};
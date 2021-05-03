import React from 'react';
import { Todo } from './Todo'

export class TodoList extends React.Component {
    render() {
        return <div className="todoList">
            <table style={{ border: "2px solid black;" }}>
                <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                </tbody>
            </table>
        </div>
    }


}
import React from 'react';
import { TodoList } from './Todolist';
import { TodoForm } from './TodoForm';

export default class TodoBox extends React.Component {
    render() {
        return <div className="todoBox">
            <h1>Todos</h1>
            <TodoList data={this.props.data} />
            {/* {console.log('data', this.props)} */}

            <TodoForm />
        </div>
    }
}

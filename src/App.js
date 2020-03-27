import React from 'react';
import './App.css';
import users from './api/users';
import todos from './api/todos';
import { NewTodo } from './components/newTodo/NewTodo';
import { TodoList } from './components/todoList/TodoList';

const todoList = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }
));

class App extends React.Component {
  state = {
    todos: [...todoList],
  }

  addTodo = (todo) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, { ...todo }],
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__heading">Add todo form</h1>
        <NewTodo users={users} addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

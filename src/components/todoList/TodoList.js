import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from '../todo/Todo';

export const TodoList = ({ todos }) => (
  <table className="table">
    <thead>
      <tr>
        <th>User ID</th>
        <th>User Name</th>
        <th>Task</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

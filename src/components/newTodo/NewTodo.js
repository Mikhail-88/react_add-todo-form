import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import './NewTodo.css';

export class NewTodo extends Component {
  state = {
    title: '',
    userId: 0,
    isErrorMessage: false,
    isErrorSelect: false,
  }

  handleSelectChange = ({ target }) => {
    this.setState({
      userId: +target.value,
      isErrorSelect: false,
    });
  }

  handleInputChange = ({ target }) => {
    this.setState({
      title: target.value,
      isErrorMessage: false,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, userId } = this.state;
    const { users, addTodo } = this.props;
    let isError = false;

    if (title.trim() === '') {
      isError = true;

      this.setState({
        isErrorMessage: true,
      });
    }

    if (userId === 0) {
      isError = true;

      this.setState({
        isErrorSelect: true,
      });
    }

    if (!isError) {
      const todo = {
        id: Number(uuid()),
        user: users.find(user => user.id === userId),
        title,
        userId,
        completed: false,
      };

      addTodo(todo);

      this.setState({
        title: '',
        userId: 0,
      });
    }
  }

  render() {
    const { title, userId, isErrorMessage, isErrorSelect } = this.state;
    const { users } = this.props;

    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <label>
          <input
            type="text"
            className="form__input form__item"
            onChange={this.handleInputChange}
            value={title}
            placeholder="Enter new todo"
          />
        </label>
        {isErrorMessage && (<div className="error">Please, enter task</div>)}
        <label>
          <select
            className="form__select form__item"
            onChange={this.handleSelectChange}
            value={userId}
          >
            <option value="">Choose user</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </label>
        {isErrorSelect && (<div className="error">Please, choose user</div>)}
        <button
          className="form__button form__item"
          type="submit"
        >
          Add
        </button>
      </form>
    );
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

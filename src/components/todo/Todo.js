import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ title, user, userId }) => (
  <tr>
    <td>{userId}</td>
    <td>{user.name}</td>
    <td>{title}</td>
  </tr>
);

Todo.propTypes = {
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

import React from "react";
import myCSS from "./TodoItem.module.css";
import PropTypes from "prop-types";

function TodoItem({ id, text, completed, toggleCompleted }) {
  const classes = []

  if (completed) classes.push(myCSS.done)

  return (
    <li className={myCSS.todoItem}>
      <span className={classes.join(' ')}>
        <input type="checkbox" checked={completed} onChange={() => toggleCompleted(id)} />
        <strong>{id}</strong>
        &nbsp;
        {text}
      </span>
      <button>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  index: PropTypes.number,
};

export default TodoItem;

import React, { useContext } from "react";
import myCSS from "./TodoItem.module.css";
import PropTypes from "prop-types";
import Context from '../../context';

function TodoItem({ id, text, completed, toggleCompleted }) {
  const {removeTodo} = useContext(Context)
  
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
      <button onClick={() => removeTodo(id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  index: PropTypes.number,
};

export default TodoItem;

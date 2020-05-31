import React, { useState } from "react";
import myCSS from "./AddTodo.module.css";
import PropTypes from "prop-types";

const AddTodo = ({onCreateTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (value.trim()) {
      onCreateTodo(value);
      setValue('')
    }
  };

  return (
    <form className={myCSS.form} action="" onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

AddTodo.propTypes = {
    onCreateTodo: PropTypes.func.isRequired
}

export default AddTodo;

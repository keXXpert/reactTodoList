import React, { useState } from "react";
import myCSS from "./AddTodo.module.css";
import PropTypes from "prop-types";

const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
            value,
            onChange: evt => setValue(evt.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const AddTodo = ({onCreateTodo}) => {
const input = useInputValue('')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (input.value().trim()) {
      onCreateTodo(input.value());
    input.clear()
    }
  };

  return (
    <form className={myCSS.form} action="" onSubmit={handleSubmit}>
      <input {...input.bind} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

AddTodo.propTypes = {
    onCreateTodo: PropTypes.func.isRequired
}

export default AddTodo;

import React, { useState } from "react";
import myCSS from "./App.module.css";
import TodoList from "./components/TodoList";
import Context from "./context";
import AddTodo from "./components/AddTodo";

function App() {
  let [todos, setTodos] = useState([
    { id: 1, completed: false, text: "Buy bread" },
    { id: 2, completed: true, text: "Buy milk" },
    { id: 3, completed: false, text: "Buy sugar" },
  ]);

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };
  const onCreateTodo = (text) => {
    setTodos(todos.concat([{
      id: todos.length + 1,
      text,
      completed: false
    }]))
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className={myCSS.wrapper}>
        <h1>Todo List</h1>
        {todos.length ? (
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        ) : (
          "You don't have any todo"
        )}
        <AddTodo onCreateTodo={onCreateTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;

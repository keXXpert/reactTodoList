import React, { useState } from "react";
import myCSS from "./App.module.css";
import TodoList from "./components/TodoList";

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
    )
  }

  return (
    <>
      <div className={myCSS.wrapper}>
        <h1>Todo List</h1>
        <TodoList todos={todos} toggleCompleted={toggleCompleted} />
      </div>
    </>
  );
}

export default App;

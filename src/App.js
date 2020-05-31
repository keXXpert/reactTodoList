import React from "react";
import myCSS from "./App.module.css";
import TodoList from "./components/TodoList";

function App() {
  const todos=[
    {id: 1, completed: false, text: 'Buy bread'},
    {id: 2, completed: false, text: 'Buy milk'},
    {id: 3, completed: false, text: 'Buy sugar'}
  ]

  return (
    <>
      <div className={myCSS.wrapper}>
        <h1>Hello World!</h1>
        <TodoList todos={todos}/>
      </div>
    </>
  );
}

export default App;

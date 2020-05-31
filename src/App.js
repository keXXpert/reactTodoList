import React from "react";
import myCSS from "./App.module.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className={myCSS.wrapper}>
        <h1>Hello World!</h1>
        <TodoList />
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import myCSS from "./App.module.css";
import TodoList from "./components/TodoList";
import Context from "./context";

// import AddTodo from "./components/AddTodo";
import Loader from "./components/Loader/Loader";
import Modal from './components/Modal/Modal';

const AddTodo = React.lazy(() => import("./components/AddTodo"));

function App() {
  let [todos, setTodos] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
          setTodos(todos);
          setLoading(false);
      });
    // .then((json) => console.log(json));
  }, []);

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };
  const onCreateTodo = (title) => {
    setTodos(
      todos.concat([
        {
          id: todos.length + 1,
          title,
          completed: false,
        },
      ])
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className={myCSS.wrapper}>
        <h1>Todo List</h1>
        <Modal />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        ) : (
          loading || "You don't have any todo"
        )}
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreateTodo={onCreateTodo} />
        </React.Suspense>
      </div>
    </Context.Provider>
  );
}

export default App;

import React from "react";
import myCSS from "./TodoItem.module.css";

export default function TodoItem (props) {
  return <li className={myCSS.todoItem}>{props.text}</li>;
};


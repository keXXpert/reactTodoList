import React from 'react'
import myCSS from './TodoList.module.css'
import TodoItem from './TodoItem/TodoItem'

export default function TodoList ({todos}) {
    return (
        <ul className={myCSS.todoList}>
            {todos.map(({id, text, completed}) => {
                return <TodoItem key={id+text} text={text} completed={completed}/>
            })}
        </ul>
    )
}
import React from 'react'
import myCSS from './TodoList.module.css'
import TodoItem from './TodoItem/TodoItem'

export default function TodoList () {
    return (
        <ul className={myCSS.todoList}>
            <TodoItem text='1' />
            <TodoItem text='2' />
        </ul>
    )
}
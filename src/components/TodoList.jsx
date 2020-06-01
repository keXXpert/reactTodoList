import React from 'react'
import myCSS from './TodoList.module.css'
import TodoItem from './TodoItem/TodoItem'
import PropTypes from 'prop-types'

const TodoList = ({todos, toggleCompleted}) => {
    return (
        <ul className={myCSS.todoList}>
            {todos.map(({id, title, completed}) => {
                return <TodoItem key={id+title} text={title} completed={completed} 
                id={id} toggleCompleted={toggleCompleted}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleCompleted: PropTypes.func.isRequired
}


export default TodoList
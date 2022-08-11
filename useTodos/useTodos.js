import { useState } from 'react';
import React, { useReducer, useEffect } from 'react'
import { todoReducer } from "./todoReducer"




const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [todosCount, setTodosCount] = useState(todos.length)
    const [pendingTodosCount, setPendingTodosCount] = useState(todos.length)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
        setTodosCount(todos.length)
        setPendingTodosCount(todos.filter(todo => !todo.done).length)
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)

    }


    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })


    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })

    }




    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount,
        pendingTodosCount
    }
}

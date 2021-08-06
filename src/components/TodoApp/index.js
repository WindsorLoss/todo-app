import React, { useState } from 'react'
import { TodoForm } from '../TodoForm'
import { TodoList } from '../TodoList'
import { Container } from './styles'

export function TodoApp() {

    const [todos, setTodos] = useState([])    

    function handleSubmit(todo) {
        setTodos([todo, ...todos])                
    }

    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function handleTodoEditing(text, id){
        setTodos(todos.map(todo => todo.id === id ? { id, text: text } : todo))
    }

    return (
        <Container>
            <TodoForm 
                onSubmit={handleSubmit}
            />

            {
                todos.length > 0 
                ? <h1>O que fazer em seguida?</h1>
                : <h1>Quais os planos para hoje?</h1>
            }

            {
                todos.map((todo) => {

                    return <TodoList 
                        key={todo.id}
                        onChange={handleTodoEditing}
                        onDelete={handleDelete}
                        todo={todo}
                    />
                })
            }

        </Container>
    )
}

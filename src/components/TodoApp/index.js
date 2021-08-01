import React, { useState } from 'react'
import { TodoForm } from '../TodoForm'
import { Container } from './styles'

export function TodoApp() {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    function handleChange(text) {
        setNewTodo(text.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(newTodo){    
            setTodos([newTodo, ...todos])
    
            setNewTodo('')
        } else {
            alert('Nenhum valor inserido. Tente novamente.')
        }
    }

    return (
        <Container>
            <TodoForm 
                onSubmit={handleSubmit} 
                onChange={handleChange}
                value={newTodo}
            />
        </Container>
    )
}

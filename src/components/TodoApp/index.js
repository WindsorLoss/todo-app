import React, { useState } from 'react'
import { TodoForm } from '../TodoForm'
import { TodoList } from '../TodoList'
import { Container } from './styles'

export function TodoApp() {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    function handleChangeCreatingTodo(text) {
        setNewTodo(text.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(newTodo){    

            const todo = {
                id: Math.random() * 10000,
                text: newTodo
            }
            setTodos([todo, ...todos])
    
            setNewTodo('')
        } else {
            alert('Nenhum valor inserido. Tente novamente.')
        }
    }

    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function handleTodoEditing(text, id){
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {
                    id,
                    text: text
                }
            }

            return todo
        }))
    }
    

    return (
        <Container>
            <TodoForm 
                onSubmit={handleSubmit} 
                onChange={handleChangeCreatingTodo}
                value={newTodo}
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

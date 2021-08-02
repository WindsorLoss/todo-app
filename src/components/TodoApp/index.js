import React, { useEffect, useState } from 'react'
import { TodoForm } from '../TodoForm'
import { TodoList } from '../TodoList'
import { Container } from './styles'

export function TodoApp() {

    const [todos, setTodos] = useState(['teste'])
    const [newTodo, setNewTodo] = useState('')

    function handleChangeCreatingTodo(text) {
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

    function handleDelete(index) {
        const allTodos = todos
        allTodos.splice(index, 1)
        setTodos(allTodos)
    }
    

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <Container>
            <TodoForm 
                onSubmit={handleSubmit} 
                onChange={handleChangeCreatingTodo}
                value={newTodo}
            />

            <h1>O que fazer em seguida?</h1>

            {
                todos.map((todo, index) => {

                    return <TodoList 
                        key={index}
                        onChange={text => {
                            const allTodos = todos
                            allTodos.splice(index, 1, text.target.value)
                            setTodos(allTodos)
                        }}
                        onDelete={() => handleDelete(index)}
                        todo={todo}
                    />
                })
            }

        </Container>
    )
}

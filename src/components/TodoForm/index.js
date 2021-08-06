import React, { useRef, useEffect, useState } from 'react'
import { Container } from './styles'

export function TodoForm({ onSubmit }) {

    const [newTodo, setNewTodo] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        if(newTodo.length > 0){    

            const todo = {
                id: Math.random() * 10000,
                text: newTodo
            }
            
            setNewTodo('')
            onSubmit(todo)

        } else {
            alert('Nenhum valor inserido. Tente novamente.')
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input 
                    ref={inputRef}
                    placeholder='Anota aí, vai!'
                    value={newTodo}
                    onChange={event => setNewTodo(event.target.value)}
                />

                <button>Criar</button>
            </form>
        </Container>
    )
}

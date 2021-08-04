import React, { useRef, useEffect, useState } from 'react'
import { Container } from './styles'

export function TodoForm({ onSubmit }) {

    const [newTodo, setNewTodo] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <Container>
            <form onSubmit={onSubmit}>
                <input 
                    ref={inputRef}
                    name='createTodoInput'
                    placeholder='Anota aí, vai!'
                    value={newTodo}
                    onChange={event => setNewTodo(event.target.value)}
                />

                <button>Criar</button>
            </form>
        </Container>
    )
}

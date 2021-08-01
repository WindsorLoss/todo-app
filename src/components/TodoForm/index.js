import React, { useState } from 'react'
import { Container } from './styles'

export function TodoForm({ onSubmit, onChange, value }) {

    // const [newTodo, setNewTodo] = useState('')

    

    return (
        <Container>
            <form onSubmit={onSubmit}>
                <input 
                    placeholder='Anota aí, vai!'
                    value={value}
                    onChange={onChange}
                />

                <button>Criar</button>
            </form>
        </Container>
    )
}

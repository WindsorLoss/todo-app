import React, { useRef, useEffect } from 'react'
import { Container } from './styles'

export function TodoForm({ onSubmit, onChange, value }) {

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <Container>
            <form onSubmit={onSubmit}>
                <input 
                    ref={inputRef}
                    placeholder='Anota aí, vai!'
                    value={value}
                    onChange={onChange}
                />

                <button>Criar</button>
            </form>
        </Container>
    )
}

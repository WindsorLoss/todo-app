import React, { useState, useRef, useEffect } from 'react'
import { Container } from './styles'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { FiTrash2, FiEdit, FiSave } from 'react-icons/fi'

export function TodoList({ onChange, onDelete, todo }) {

    const [isDisabled, setIsDisabled] = useState(true)
    const [isChecked, setIsChecked] = useState(false)

    const inputTodo = useRef()

    function handleEdit() {
        
        if(todo.text.length > 0){
            isDisabled ? setIsDisabled(false) : setIsDisabled(true)
        } else {
            alert('Nenhum texto inserido. Tente novamente.')
        }
    }
 
    function handleCheck() {
        return isChecked ? setIsChecked(false) : setIsChecked(true)
    }

    useEffect(() => {
        inputTodo.current.focus()
    }, [isDisabled])

    return (
        <Container>

            <div 
                className={isChecked ? 'checked' : ''}
            >
                <button onClick={handleCheck}>
                    {
                        !isChecked 
                        ? <MdCheckBoxOutlineBlank size={'1.5625rem'} color='white'/>
                        : <MdCheckBox size={'1.5625rem'} color='white'/>
                    }
                </button>

                {
                    !isChecked
                    ?   <input 
                            ref={inputTodo}
                            value={todo.text} 
                            disabled={isDisabled}
                            onChange={text => {
                                const textUpdated = text.target.value
                                onChange(textUpdated, todo.id)
                            }}
                        />
                    :   <p>{todo.text}</p>
                }
                
            </div>

            <button onClick={handleEdit} style={{margin: '0 20px'}} disabled={isChecked}>
                {
                    isDisabled 
                    ? <FiEdit size={'1.5625rem'} color='white'/>
                    : <FiSave size={'1.5625rem'} color='white'/>
                }
            </button>

            <button disabled={isChecked} onClick={() => onDelete(todo.id)}>
                <FiTrash2 size={'1.5625rem'} color='white' />
            </button>

        </Container>
    )
}

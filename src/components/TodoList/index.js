import React, { useState, useRef, useEffect } from 'react'
import { Container } from './styles'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { FiTrash2, FiEdit, FiSave } from 'react-icons/fi'
import { Modal } from '../Modal'

export function TodoList({ onChange, onDelete, todo }) {

    const [isDisabled, setIsDisabled] = useState(true)
    const [isChecked, setIsChecked] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const inputTodo = useRef()

    function handleEdit() {
        
        if(todo.text.length > 0){
            isDisabled ? setIsDisabled(false) : setIsDisabled(true)
        } else {
            alert('Nenhum texto inserido. Tente novamente.')
            inputTodo.current.focus()
        }
    }
 
    function handleCheck() {
        return isChecked ? setIsChecked(false) : setIsChecked(true)
    }

    useEffect(() => {
        if(!isDisabled) {
            inputTodo.current.focus()
        }
    }, [isDisabled])

    return (
        <>
        <Container>

            <div 
                className={isChecked ? 'todoInput checked' : 'todoInput'}
            >
                <button onClick={handleCheck}>
                    {
                        !isChecked 
                        ? <MdCheckBoxOutlineBlank size={'1.5625rem'} color='white'/>
                        : <MdCheckBox size={'1.5625rem'} color='white'/>
                    }
                </button>

                {
                    !isDisabled
                    ?   <input 
                            ref={inputTodo}
                            value={todo.text} 
                            onChange={event => {
                                const textUpdated = event.target.value
                                onChange(textUpdated, todo.id)
                            }}
                        />
                    :   isChecked 
                    ?   <p className='todoChecked'>{todo.text}</p>
                    :   <p>{todo.text}</p>
                }
                
            </div>

           <div className='functionButtons'>

                <button onClick={handleEdit} disabled={isChecked}>
                    {
                        isDisabled 
                        ? <FiEdit size={'1.5625rem'} color='white'/>
                        : <FiSave size={'1.5625rem'} color='white'/>
                    }
                </button>

                <button disabled={isChecked} onClick={() => setIsModalOpen(true)}>
                    <FiTrash2 size={'1.5625rem'} color='white' />
                </button>

            </div>

            
        </Container>
            {
                isModalOpen && 
                <Modal 
                    onClose={() => setIsModalOpen(false)}
                    onDelete={() => onDelete(todo.id)}
                >
                    <h1>Tem certeza que deseja deletar esta nota?</h1>
                </Modal>
            }

        </>
    )
}

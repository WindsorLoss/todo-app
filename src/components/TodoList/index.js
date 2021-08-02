import React, { useState } from 'react'
import { Container } from './styles'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { FiTrash2, FiEdit, FiSave } from 'react-icons/fi'

export function TodoList({ onChange, onDelete, todo }) {

    const [isDisabled, setIsDisabled] = useState(true)
    const [isChecked, setIsChecked] = useState(false)

    function handleEdit() {

        if(todo.length > 0){
            isDisabled ? setIsDisabled(false) : setIsDisabled(true)
        } else {
            alert('Nenhum texto inserido. Tente novamente.')
        }
    }
 
    function handleCheck() {
        return isChecked ? setIsChecked(false) : setIsChecked(true)
    }

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
                            value={todo} 
                            disabled={isDisabled}
                            onChange={onChange}
                        />
                    :   <p>{todo}</p>
                }
                
            </div>

            <button onClick={handleEdit} style={{margin: '0 20px'}} disabled={isChecked}>
                {
                    isDisabled 
                    ? <FiEdit size={'1.5625rem'} color='white'/>
                    : <FiSave size={'1.5625rem'} color='white'/>
                }
            </button>

            <button disabled={isChecked} onClick={onDelete}>
                <FiTrash2 size={'1.5625rem'} color='white' />
            </button>

        </Container>
    )
}

import React from 'react'
import { ModalBox } from './styles'

export function Modal({ children, onClose, id = 'modal', onDelete }) {

    const handleOutsideClick = e => {
        if(e.target.id === id) onClose()
    }

    return (
        <ModalBox onClick={handleOutsideClick} id={id}>
            <div className='container'>
                <button className='close' onClick={onClose}/>
        
                <div className='content'>
                    {children}
                </div>

                <div>
                    <button className='action-buttons' onClick={onDelete}>Sim</button>
                    <button className='action-buttons' onClick={onClose}>Não</button>
                </div>
            </div>
        </ModalBox>
    )
}

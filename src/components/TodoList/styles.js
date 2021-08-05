import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;

    margin-bottom: .8rem;

    input {
        width: 100%;
        padding-left: 0.5rem;
        margin-right: 1.5rem;

        background: var(--shape-color);
        color: white;

        border: 0;
        border-radius: 15px;

        outline: 0;

        font-size: 1.4rem;

        &:focus{
            border-bottom: 3px solid var(--buttons);
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }       
        
    }

    p {
        font-size: 1.4rem;
        padding: 0.5rem;
        width: 100%;
        overflow: hidden;
        overflow-wrap: break-word;

        &.todoChecked {
            text-decoration: line-through;
        }

    }
    
    div {
        
        display: flex;
        align-items: center;

        &.todoInput {

            width: 100%;

            background: var(--shape-color);

            border-radius: 15px;

            padding-left: 1rem;

            button {
                background: transparent;
            }

        }

        &.checked {
            filter: brightness(80%);
        }

        
    }

    .functionButtons {
        
        button:first-child{
            margin: 0 18px
        }
       
    }

    button {
        background: var(--buttons);
        
        border: 0;
        border-radius: 15px;

        width: 48px;
        height: 44.8px;

        outline: 0;

        transition: filter 0.2s;

        &:active {
            transform: translateY(4px);
        }

        &:hover {
            filter: brightness(80%)
        }

        &:disabled {
            filter: brightness(80%);

            &:active{
                transform: translateY(0px);
            }
            
        }

    }

    @media (max-width: 860px) {
        flex-direction: column;
        margin-bottom: 1rem;

        padding: 5px;

        .functionButtons {
            justify-content: space-between;

            button {
                width: 49%;
                margin-top: 5px;

                &:first-child {
                    margin: 0;
                    margin-top: 5px;
                }
            }
   
        }

    }
`
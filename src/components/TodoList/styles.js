import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

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
        text-decoration: line-through;
        font-size: 1.4rem;
        padding-left: 0.5rem;
        width: 100%;
        overflow: hidden;
        overflow-wrap: break-word;
    }
    
    div {
        
        display: flex;

        width: 88%;

        background: var(--shape-color);

        justify-content: center;
        align-items: center;

        border-radius: 15px;

        padding-left: 1rem;

        button {
            background: transparent;
        }

        &.checked {
            filter: brightness(80%);
        }

        &:last-child {
            margin-bottom: 2rem;
        }
    }

    button {
        background: var(--buttons);
        
        border: 0;
        border-radius: 15px;

        width: 3rem;
        height: 2.8rem;

        outline: 0;

        &:active {
            transform: translateY(4px);
        }

        &:disabled {
            filter: brightness(80%);

            &:active{
                transform: translateY(0px);
            }
            
        }

    }
`
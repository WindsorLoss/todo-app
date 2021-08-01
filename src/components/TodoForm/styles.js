import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;

    form {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    

    input {
        background: var(--shape-color);
        border: 0;
        border-radius: 15px;

        width: 78%;
        height: 2.58rem;
        padding-left: 1rem;

        font-size: 1.4rem;
        color: white;

        &:focus {
            outline: 0; 

            border-bottom: 3px solid var(--buttons);
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;

        }
    }

    button {
        border: 0;
        border-radius: 15px;
        background: var(--buttons);

        color: white;
        font-size: 1.2rem;

        width: 20%;

        transition: filter 0.5s;

        &:hover {
            filter: brightness(90%);
        }

        &:active {
            transform: translateY(4px);
        }

    }

    
`
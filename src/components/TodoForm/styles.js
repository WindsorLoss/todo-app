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

        width: 38rem;
        height: 2.58rem;
        padding-left: 1rem;

        font-size: 1.4rem;
        color: white;

        &:focus {
            border-bottom: 2px solid var(--buttons);
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    button {
        border: 0;
        border-radius: 15px;
        background: var(--buttons);

        color: white;
        font-size: 1.2rem;

        width: 6.3rem;

        transition: filter 0.5s;

        &:hover {
            filter: brightness(90%);
        }

    }

    
`
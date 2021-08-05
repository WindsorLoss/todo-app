import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;

    padding-top: 2rem;
    padding-bottom: 2.5rem;

    height: 100vh;
    width: 80%;
    
    h1 {
        font-size: 2rem;

        margin-top: 3rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 860px){
        width: 60%;
    }

    @media (max-width: 400px) {
        width: 80%;
    }


`
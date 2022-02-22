import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    padding: 5rem 1rem;
   
`
export const Content = styled.div`
    h1{
        font-size: 3.4rem;
        font-family: 'NewYork';
        max-width: 800px;
        text-align: center;
        color: var(--text-body);
        span{ 
            color:var(--text-pink);
        }
    }
    .subtitle{
        text-align: center;
        margin: 2rem;
        color: var(--text-body);
    }
`
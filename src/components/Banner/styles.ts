import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    padding: 5rem 1rem;
   
`
export const Content = styled.div`
    h1{
        font-size: 4rem;
        text-align: center;
        color: var(--text-body);
        span{ 
            color:var(--text-pink);
            display: block;
        }
    }
    .subtitle{
        text-align: center;
        margin: 2rem;
        color: var(--text-body);
    }
`
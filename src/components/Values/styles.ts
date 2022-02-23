
import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    div{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       padding: .5rem;
       img{
           width: 2.7rem;
           height: 2.7rem;
       }
       p{ 
           color: var(--text-body);
           font-weight: 600;
       }
       small{
        color: var(--text-body);
       }
    }
`
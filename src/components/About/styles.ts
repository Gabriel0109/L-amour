import styled from 'styled-components'

export const Container = styled.section`
        display: flex;
        padding: 2rem;
        @media screen and (max-width: 610px){
                flex-direction: column;
        }
        
`
export const Content = styled.div`
        width: 48.5%;
        padding: 1rem;
        .img-fluid{
        display: block;
        width: 100%;
        height: 82%;
        border-top-left-radius: 10rem;
        border-bottom-right-radius: 10rem;
        }
        h1{ 
                color: var(--text-body);
                font-size: 4.4rem;
                margin-bottom: 3rem;
        }
        p{
                color: var(--text-body);
                line-height: 1.5rem
        }
        @media screen and (max-width: 610px){
                width: 100%;
        }
`
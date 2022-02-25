import styled from 'styled-components'
export const Container = styled.div`
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem 2rem;
        color: #fff;
        background-color: transparent;
        hr{
            width: 100%;
            border: .5px solid var(--text-body)
        }
        nav{
            width: 100%;
            padding: 1rem 2rem
        }
        ul{
            display: flex;
           justify-content: center;
            li{
                margin-inline: 2rem;
                a{
                    color: var(--text-body);
                    font-weight: bold;
                }
            }
        }
    }
`
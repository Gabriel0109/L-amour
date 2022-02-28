import styled from 'styled-components'

export const Container = styled.section`
padding: 2rem;
    .accordion-button,
    .accordion-header,
    .accordion-item{
        color: var(--text-body);
        background-color: transparent;
        border-radius: 0;
        border-width: 1px 0px 1px 0px;
    }
    .accordion-button:focus{
        box-shadow: 0 0;
    }
    .accordion-button{
        font-weight: 600;
    }

`
export const CestaItem = styled.div`
    display: flex;
    max-width: 100%;
    ul{
        list-style-type: '-';
        padding-left: 1.2rem
    }
    p{ 
        font-weight: 600;
    }
    .div-ingredients{
        padding-inline: 1.2rem
    }
    .div-img{
        width: 33%
    }
    img{ 
        display: block;
        width: 100%;
        border-radius: 24px
    }
    
` 
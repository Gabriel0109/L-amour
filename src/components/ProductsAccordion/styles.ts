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
    h1{
        color: var(--text-body);
        font-size: 3.2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

`
export const CestaItem = styled.div`
    display: flex;
    max-width: 100%;
    @media screen and (max-width: 767.9px){
      flex-direction: column;
    }
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
    .pricing{
        white-space: nowrap;
        width: 33%;
        text-align: right;
    }
    @media screen and (max-width: 767.9px){
        .div-img{
            width: 48.9%
        }
        .div-ingredients{
            padding: 0rem;
        }
        .pricing{
            width: 100%;
            text-align: left;
        }
        
    }
` 
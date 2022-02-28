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
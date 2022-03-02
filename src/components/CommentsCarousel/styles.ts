import styled from "styled-components";


export const ItemCarousel = styled.section`
    padding: 1rem 2rem;
    width: 50%;
    background-color: #fff;
    color: var(--text-body);
    margin: 15px;
    border-radius: 1rem;
   small{ 
       float: right;
       opacity: 0.8
   }
   @media screen and (max-width: 610px){
       width: 100%
   }
 
    

`
export const Container = styled.section`
padding: 3rem;
h1{
    color: var(--text-body);
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: 2rem;
}
.rec .rec-dot{
    box-shadow: 0 0 1px 2px rgb(219, 80, 113) !important;
    
 }
 .rec .rec-dot_active{
     background-color: rgba(219, 80, 113, .5)
 }
`
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.main`
max-width: 1120px;
margin: 0 auto;
`
export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F8E5E3;
        --red: #E52E4D;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #775547;
        --text-pink: #DB5071;
        --shape: #FFFFFF;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width:1080px){
            font-size: 93.75%;
        }
        @media (max-width:720px) {
            font-size:87.5%;
        }
         
        
    }
    body,input,textarea,button{
        font-family: 'Nunito Sans', sans-serif;
        font-weight:400;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
        font-family: 'NewYork';
    }
    ul{
        list-style-type: none;
    }
    a{
        text-decoration: none;
            &:visited{
                color: unset;
            }
            &:hover{
                filter: opacity(.5);
            }
    }
   
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }
    ::selection{
        background-color: rgba(0  ,0  ,0  ,0.1);
    }
`
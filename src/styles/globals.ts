import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
    body, input, textarea, button{
        font: 400 1rem "Roboto", sans-serif;
    }

    button{
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`;

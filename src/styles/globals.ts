import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --green1: #eafe52;
        --green2: #d7f205;
        --green3: #bff205;
        --green4: #6a8c20;
        --white: #ffffff;
        --gray1: #f7f7f7;
        --gray2: #ededed;
        --gray3: #dedede;
        --gray4: #cccccc;
        --gray5: #b2b2b2;
        --gray8: #595959;
        --gray9: #404040;
        --gray10: #2e2e2e;
        --gray11: #111111;
        --gray12: #000000;
    }

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

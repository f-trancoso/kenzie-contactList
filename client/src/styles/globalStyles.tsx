import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --main1: #F0386B;
        --main2: #FF5376;
        --main3: #F7B538;

        --background: #343434;

        --text1: #dfdfdf
    }

    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
    font-family: 'Inter', sans-serif;
    list-style: none;
    text-decoration: none;
  }
  
  body,html{
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(var(--grey-4),1);
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
 
  img{
    max-width: 100%;
  }
  button {
    cursor: pointer;
  }
`
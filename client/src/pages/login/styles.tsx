import styled from "styled-components"

export const PageLoginStyled = styled.main`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--background);

    p{
        color: var(--text1);
        font-weight: 600;
    }
    
    .register-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .register-container p{
        margin-bottom: 20px;
    }

    .container {
        margin: 40px 0px 0px 0px; 
        padding-top: 40px;
        height: 40vh;
        width: 100%;
        max-width: 450px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    form {
        
        width: 90%;
        height: 80%;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 28px;
        padding: 0px 5%;
        color: black;

        h1 {
            font-size: 32px;
            text-align: center;
            color: var(--main1);
        }
    }

`
import styled from "styled-components"

export const PageLoginStyled = styled.main`
    /* width: 100%; */
    display: flex;
    background-color: var(--grey7);
    justify-content: center;
    
    .register-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .register-container p {
        margin-bottom: 30px;
    }

    .container {
        margin: 40px 0px 0px 0px; 
        padding-top: 40px;
        height: 40vh;
        width: 100%;
        background-color: var(--grey7);
        max-width: 450px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
        @media (max-height: 800px) {
            margin: 100px 0px 60px 0px; 
        }
    }

    form {
        border-radius: 8px;
        margin-top: 40px;
        width: 90%;
        height: 80%;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        padding: 0px 5%;
        color: black;

        .input {
            width: 100%;
        }

        h1 {
            font-size: 32px;
            text-align: center;
            color: var(--main1);
        }
    }

`
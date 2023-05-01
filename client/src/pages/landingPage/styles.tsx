import styled from "styled-components";

export const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding-top: 100px;
    align-items: center;

    background-color: var(--background);

    h1 {
        color: var(--main1);
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div p{
        margin-bottom: 20px;
        margin-top: 20px;
        color: var(--text1);
        font-weight: 600;
    }

`
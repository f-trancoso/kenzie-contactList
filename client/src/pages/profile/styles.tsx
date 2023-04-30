import styled from "styled-components";

export const ProfilePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: var(--background);

    .main-container{
        width: 95%;
        max-width: 1100px;
        display: flex;
        flex-direction: column;
        margin-top: 50px;

    }

    .userInfo {
        display: flex;
        justify-content: space-between;
        height: 133px;
        padding: 20px 70px;
        align-items: center;
    }

    .userInfo h3{
        font-size: 42px;
        color: var(--main1);
    }

    .userInfo p{
        color: var(--text1);
        font-weight: 600;
    }

    .userInfo-phone{
        color: var(--text1);
    }

    .contact-container_head {
        font-size: 25px;
        font-weight: 600;
        color: var(--main1);
        margin-bottom: 30px;
    }

    .contact-container {
        border: 5px solid var(--main1);
        border-radius: 15px;
        padding: 10px 30px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
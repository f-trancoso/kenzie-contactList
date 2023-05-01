import styled from "styled-components";

export const PageRegisterStyled = styled.main`
  display: flex;
  background-color: var(--background);
  justify-content: center;
  width: 100vw;
  height: 100vh;

  p{
    color: var(--text1);
    font-weight: 600;
  }

  .container {
    margin: 40px 0px 0px 0px;
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    margin: 30px 0px;
    border-radius: 8px;
    background-color: var(--background);
    width: 90%;
    min-height: 500px;
    display: flex;
    gap: 28px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 32px;
      text-align: center;
      color: var(--main1)
    }
  }

  .login-container{
    display: flex;
    justify-content: space-between;
    width: 70%;
    flex-direction: column;
    align-items: center;

    height: 80px;
  }
`;

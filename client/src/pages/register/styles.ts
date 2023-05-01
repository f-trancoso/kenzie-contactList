import styled from "styled-components";

export const PageRegisterStyled = styled.main`
  display: flex;
  background-color: var(--grey7);
  justify-content: center;

  .container {
    margin: 40px 0px 0px 0px;
    width: 100%;
    background-color: var(--grey7);
    max-width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-height: 800px) {
      margin: 100px 0px 60px 0px;
    }
  }

  form {
    margin: 30px 0px;
    border-radius: 8px;
    background-color: var(--background);
    width: 90%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    padding: 20px 5%;

    .input {
      width: 100%;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      color: var(--main2)
    }

    .text2 {
      align-self: center;
      color: var(--grey3);
    }

    p {
      color: var(--brand2);
      font-size: 1rem;
      font-weight: 600;
    }

    .div--buttonSubmit{
      display: flex;
      justify-content: center;
    }

    @media (max-height: 800px) {
      margin: 0;
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

import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  gap: 6px;

  input {
    height: 50px;
    border-radius: 4px;
    border: solid 2px var(--main1);
    padding: 5px 15px;
    font-size: 1rem;
    color: var(--text1);
    font-weight: 600;
    background-color: transparent;
    transition: 0.3s;
  }

  label {
    color: var(--text1);
    font-weight: 600;
    font-size: 1.1rem;
  }

  input:hover {
    border-color: var(--brand2);
    background-color: var(--grey8);
  }

  input::placeholder {
    font: var(--input-placeholder);
  }

  span {
    align-self: flex-start;
    color: var(--grey3);
    font: var(--body-2-400);
  }
`;
import styled, { css } from "styled-components";
import { IButtonStyled } from "../../interfaces";

export const StyledButton = styled.button`
  background-color: transparent;
  color: var(--text);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 auto;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 10px 20px;
  transition: 0.3s;

  &:hover {
    background-color: var(--main1)
  }

  ${({ background }: IButtonStyled) => {
    return css`
      background-color: ${background};
    `;
  }}

  ${({ border }: IButtonStyled) => {
    if (border) {
      return css`
        border: 2px solid var(--${border});
      `;
    }
  }}

  ${({ color }) => {
    if (color) {
      return css`
        color: var(--${color});
      `;
    }
  }}
`
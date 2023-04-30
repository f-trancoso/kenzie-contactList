import { IButton } from "../../interfaces";
import { StyledButton } from "./styles";
export const Button = ({
    background,
    text,
    color,
    type,
    onClick,
    border
  }: IButton) => {
    return (
      <StyledButton
        background={background}
        color={color}
        type={type}
        onClick={onClick}
        border={border}
      >
        {text}
      </StyledButton>
    );
  };
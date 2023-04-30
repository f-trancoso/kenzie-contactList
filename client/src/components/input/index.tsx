import { StyledInput } from "./styles";
import { InputInterface } from "../../interfaces";

export const Input = ({
    label,
    id,
    placeholder,
    register,
    value,
    errors,
    type
  }: InputInterface) => {
    return (
      <StyledInput>
        <label htmlFor={id}> {label} </label>
        <input
          {...register(id)}
          value={value}
          id={id}
          placeholder={placeholder}
          type={type}
        />
        <span>{errors}</span>
      </StyledInput>
    );
  };
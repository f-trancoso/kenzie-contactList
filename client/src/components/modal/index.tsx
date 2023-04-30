import { ReactNode } from "react";
import {
  Container,
  Header,
  ContentContainer,
  Overlay,
} from "./styles";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  headerTitle: string;
}

export const Modal = ({ children, headerTitle, setIsOpen }: IModal) => {

  const closeModal = () =>{
    setIsOpen(false)
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <h3>{headerTitle}</h3>
          <div onClick={closeModal} className="close-button"> x </div>
        </Header>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </Overlay>
  );
};
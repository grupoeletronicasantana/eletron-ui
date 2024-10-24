import { useEffect } from "react";

import {
  Container,
  ModalContainer,
  ModalHeaderContainer,
  ModalBodyContainer,
  ModalFooterContainer,
} from "./styles";

import { ButtonIcon } from "../Button";

import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children:
    | React.ReactElement<ModalBodyProps>
    | Array<
        React.ReactElement<ModalHeaderProps | ModalBodyProps | ModalFooterProps>
      >;
}

interface ModalHeaderProps {
  title: string;
  description?: string;
}

interface ModalBodyProps {
  align?: "left" | "center" | "justify" | "right";
  children: React.ReactNode;
}

interface ModalFooterProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {isOpen && (
        <Container onClick={() => onClose()}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ButtonIcon
              icon={<IoClose size={24} />}
              onClick={() => onClose()}
            />
            {children}
          </ModalContainer>
        </Container>
      )}
    </>
  );
}

function ModalHeader({ title, description }: ModalHeaderProps) {
  return (
    <ModalHeaderContainer>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </ModalHeaderContainer>
  );
}

function ModalBody({ align, children }: ModalBodyProps) {
  return <ModalBodyContainer $align={align}>{children}</ModalBodyContainer>;
}

function ModalFooter({ children }: ModalFooterProps) {
  return <ModalFooterContainer>{children}</ModalFooterContainer>;
}

export { Modal, ModalHeader, ModalBody, ModalFooter };

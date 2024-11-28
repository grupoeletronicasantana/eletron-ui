import {
  DialogHeaderContainer,
  DialogBodyContainer,
  DialogFooterContainer,
} from "./styles";

import { Modal } from "../Modal";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children:
    | [
        React.ReactElement<DialogHeaderProps>,
        React.ReactElement<DialogBodyProps>,
        React.ReactElement<DialogFooterProps>
      ]
    | [
        React.ReactElement<DialogBodyProps>,
        React.ReactElement<DialogFooterProps>
      ]
    | React.ReactElement<DialogBodyProps>;
}

interface DialogHeaderProps {
  title: string;
  description?: string;
}

interface DialogBodyProps {
  children: string;
}

interface DialogFooterProps {
  children: React.ReactElement | React.ReactElement[];
}

function Dialog({ isOpen, onClose, children }: DialogProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>
  );
}

function DialogHeader({ title, description }: DialogHeaderProps) {
  return (
    <DialogHeaderContainer>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </DialogHeaderContainer>
  );
}

function DialogBody({ children }: DialogBodyProps) {
  return (
    <DialogBodyContainer>
      <p>{children}</p>
    </DialogBodyContainer>
  );
}

function DialogFooter({ children }: DialogFooterProps) {
  return <DialogFooterContainer>{children}</DialogFooterContainer>;
}

export { Dialog, DialogHeader, DialogBody, DialogFooter };

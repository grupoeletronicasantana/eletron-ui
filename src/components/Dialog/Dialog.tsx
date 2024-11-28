import {
  DialogContainer,
  DialogHeaderContainer,
  DialogBodyContainer,
  DialogFooterContainer,
} from "./styles";

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
    <DialogContainer isOpen={isOpen} onClose={onClose}>
      {children}
    </DialogContainer>
  );
}

function DialogHeader({ title, description }: DialogHeaderProps) {
  return <DialogHeaderContainer title={title} description={description} />;
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

import {
  AlertDialogContainer,
  AlertDialogBodyContainer,
  AlertDialogActionsContainer,
} from "./styles";

import {
  CiCircleCheck,
  CiCircleRemove,
  CiCircleInfo,
  CiCircleAlert,
} from "react-icons/ci";

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: [
    React.ReactElement<AlertBodyProps>,
    React.ReactElement<AlertDialogActionsProps>
  ];
}

interface AlertBodyProps {
  variant?: "success" | "error" | "info" | "destroy";
  title: string;
  description: string;
}

interface AlertDialogActionsProps {
  children: React.ReactElement | React.ReactElement[];
}

function AlertDialog({ isOpen, onClose, children }: AlertDialogProps) {
  return (
    <AlertDialogContainer isOpen={isOpen} onClose={onClose}>
      {children}
    </AlertDialogContainer>
  );
}

function AlertDialogBody({
  variant = "info",
  title,
  description,
}: AlertBodyProps) {
  function variantIcon(variant: AlertBodyProps["variant"]) {
    switch (variant) {
      case "success":
        return <CiCircleCheck size={80} />;

      case "error":
        return <CiCircleAlert size={80} />;

      case "destroy":
        return <CiCircleRemove size={80} />;

      default:
        return <CiCircleInfo size={80} />;
    }
  }

  return (
    <AlertDialogBodyContainer $variant={variant}>
      {variantIcon(variant)}
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </AlertDialogBodyContainer>
  );
}

function AlertDialogActions({ children }: AlertDialogActionsProps) {
  return <AlertDialogActionsContainer>{children}</AlertDialogActionsContainer>;
}

export { AlertDialog, AlertDialogBody, AlertDialogActions };

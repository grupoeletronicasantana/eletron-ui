import { styled, css } from "styled-components";

import { Modal, ModalHeader } from "../Modal";
import {
  ModalHeaderContainer,
  ModalBodyContainer,
  ModalFooterContainer,
} from "../Modal/styles";

export const AlertDialogContainer = styled(Modal)``;

export const AlertDialogBodyContainer = styled(ModalBodyContainer)<{
  $variant: "success" | "error" | "info" | "destroy";
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;

  width: 286px;

  svg {
    color: red;

    ${({ $variant, theme }) => {
      switch ($variant) {
        case "success":
          return css`
            color: green;
          `;

        case "info":
          return css`
            color: ${theme.colors.blue_es};
          `;

        default:
          return css`
            color: ${theme.colors.red_es};
          `;
      }
    }}
  }
`;

export const AlertDialogActionsContainer = styled(ModalFooterContainer)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1.5rem 0 0;

  width: 100%;

  button {
    width: 100%;
  }
`;

export const DialogContainer = styled(Modal)``;

export const DialogHeaderContainer = styled(ModalHeader)``;

export const DialogBodyContainer = styled(ModalBodyContainer)``;

export const DialogFooterContainer = styled(ModalFooterContainer)``;

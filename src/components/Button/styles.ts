import { styled, css } from "styled-components";

export const ButtonContainer = styled.button<{
  $size?: "sm" | "md" | "lg";
  $fullWidth?: boolean;
  $variant?: "primary" | "secundary" | "outline" | "destroy";
}>`
  border-radius: 0.375rem;
  border: none;

  color: ${({ theme }) => theme.colors.white100};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  ${({ $fullWidth }) => {
    switch ($fullWidth) {
      case true:
        return css`
          width: 100%;
        `;
      default:
        return css`
          width: fit-content;
        `;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          height: 2rem;
          padding: 0 1rem;
        `;
      case "md":
        return css`
          height: 2.5rem;
          padding: 0.5rem 1.5rem;
        `;
      case "lg":
        return css`
          font-size: 1rem;
          height: 3rem;
          padding: 1rem 2rem;
        `;
    }
  }}

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "primary":
        return css`
          background-color: ${theme.colors.blue_es};

          &:focus {
            outline: 2px solid ${theme.colors.blue_es};
            outline-offset: 2px;
          }
        `;

      case "secundary":
        return css`
          background-color: transparent;
          color: ${theme.colors.red_es};
          border: 1px solid ${theme.colors.red_es};

          &:disabled {
            background-color: transparent;
            color: #ccc;
            border: 1px solid #ccc;
          }

          &:focus {
            outline: 2px solid ${theme.colors.red_es};
            outline-offset: 2px;
          }
        `;

      case "outline":
        return css`
          background-color: transparent;
          color: ${theme.colors.blue_es};
          border: 1px solid ${theme.colors.blue_es};

          &:disabled {
            background-color: transparent;
            color: #ccc;
            border: 1px solid #ccc;
          }

          &:focus {
            outline: 2px solid ${theme.colors.blue_es};
            outline-offset: 2px;
          }
        `;

      case "destroy":
        return css`
          background-color: ${theme.colors.red_es};

          &:focus {
            outline: 2px solid ${theme.colors.red_es};
            outline-offset: 2px;
          }
        `;
    }
  }}

  &:disabled {
    background-color: #c9c9c9;
    cursor: not-allowed;

    &:hover {
      filter: none;
    }
  }
`;

export const ButtonIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  width: fit-content;
  height: fit-content;

  &:hover {
    border-radius: 50%;
    outline: 4px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border-radius: 50%;
    outline: 4px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

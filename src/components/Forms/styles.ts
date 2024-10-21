import { styled, css } from "styled-components";

export const FormsContainer = styled.form`
  width: 100%;
`;

export const Asterisk = styled.span`
  color: red;
  &::before {
    content: "*";
  }
`;

export const InputLabelFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabelContainer = styled.label`
  color: ${({ theme }) => theme.colors.gray20};
  white-space: nowrap;
`;

export const LabelErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ErrorAlertContainer = styled.p`
  font-size: 13px;
  color: red;
  white-space: nowrap;

  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const InputContainer = styled.input<{ $size?: "sm" | "md" }>`
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.INPUT};

  width: 100%;
  padding: 8px 16px;

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.blue_es};
  }

  &:read-only {
    cursor: not-allowed;
    opacity: 0.5;
    outline: none;
  }

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          height: 2rem;
        `;
      default:
        return css`
          height: 2.5rem;
        `;
    }
  }}
`;

export const SecretContainer = styled.div`
  position: relative;

  > button {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`;

export const InputErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const TextareaContainer = styled.textarea<{
  $size?: "sm" | "md" | "lg";
}>`
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.INPUT};

  width: 100%;
  padding: 16px;

  resize: none;

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.blue_es};
  }

  &:read-only {
    cursor: not-allowed;
    opacity: 0.5;
    outline: none;
  }

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          height: 5.625rem;
        `;
      case "md":
        return css`
          height: 7.5rem;
        `;
      default:
        return css`
          height: 160px;
        `;
    }
  }}
`;

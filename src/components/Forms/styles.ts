import { styled, css } from "styled-components";

export const FormsContainer = styled.form`
  width: 100%;
`;

export const Asterisk = styled.span`
  color: ${({ theme }) => theme.colors.red_es};
  &::before {
    content: "*";
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
`;

export const LabelContainer = styled.label`
  white-space: nowrap;
`;

export const LabelErrorWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ErrorTextContainer = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.red_es};
  white-space: nowrap;

  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const InputContainer = styled.input<{ $size?: "sm" | "md" }>`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.gray20};

  width: 100%;
  padding: 8px 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue_es};
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

export const SecretInputContainer = styled(InputContainer)``;

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
  border: 2px solid ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.gray20};

  width: 100%;
  padding: 16px;

  resize: none;

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue_es};
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

export const HelperTextContainer = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray60};
  white-space: nowrap;
`;

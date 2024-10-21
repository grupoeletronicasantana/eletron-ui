import { styled, css } from "styled-components";

export const FullScreenLoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.gray90};
  width: 100vw;
  height: 100vh;
  z-index: 9999999999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadSpinContainer = styled.span<{
  $size?: "xs" | "s" | "md" | "lg" | "xl" | null;
}>`
  ${({ $size }) => {
    switch ($size) {
      case "xs":
        return css`
          width: 0.75rem;
          height: 0.75rem;
        `;

      case "s":
        return css`
          width: 1rem;
          height: 1rem;
        `;

      case "md":
        return css`
          width: 1.5rem;
          height: 1.5rem;
        `;

      case "lg":
        return css`
          width: 2rem;
          height: 2rem;
        `;

      case "xl":
        return css`
          width: 4rem;
          height: 4rem;
        `;

      default:
        return css`
          width: 1.5rem;
          height: 1.5rem;
        `;
    }
  }}
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid ${({ theme }) => theme.colors.blue_es};
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    border-bottom: 4px solid ${({ theme }) => theme.colors.red_es};
    border-left: 4px solid transparent;

    ${({ $size }) => {
      switch ($size) {
        case "xs":
          return css`
            width: 0.75rem;
            height: 0.75rem;
          `;

        case "s":
          return css`
            width: 1rem;
            height: 1rem;
          `;

        case "md":
          return css`
            width: 1.5rem;
            height: 1.5rem;
          `;

        case "lg":
          return css`
            width: 2.5rem;
            height: 2.5rem;
          `;

        case "xl":
          return css`
            width: 4rem;
            height: 4rem;
          `;

        default:
          return css`
            width: 1.5rem;
            height: 1.5rem;
          `;
      }
    }}
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

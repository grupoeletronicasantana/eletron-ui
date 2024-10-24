import { styled, css } from "styled-components";

export const SpinnerContainer = styled.span<{
  $size?: "sm" | "md" | "lg" | "xl";
}>`
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid ${({ theme }) => theme.colors.blue_es};
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          width: 1rem;
          height: 1rem;

          border-top-width: 2px;
          border-right-width: 2px;
        `;

      case "lg":
        return css`
          width: 3rem;
          height: 3rem;
        `;

      case "xl":
        return css`
          width: 4rem;
          height: 4rem;
        `;

      default:
        return css`
          width: 2rem;
          height: 2rem;

          border-top-width: 3px;
          border-right-width: 3px;
        `;
    }
  }}

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
        case "sm":
          return css`
            width: 1rem;
            height: 1rem;

            border-bottom-width: 2px;
            border-left-width: 2px;
          `;

        case "lg":
          return css`
            width: 3rem;
            height: 3rem;
          `;

        case "xl":
          return css`
            width: 4rem;
            height: 4rem;
          `;

        default:
          return css`
            width: 2rem;
            height: 2rem;

            border-bottom-width: 3px;
            border-left-width: 3px;
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

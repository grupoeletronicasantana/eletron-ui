import { styled, css } from "styled-components";

export const ChipContainer = styled.div<{
  $variant?: "solid" | "outline" | "subtle";
}>`
  display: inline-flex;
  align-items: center;
  position: relative;

  padding: 4px 12px;
  border-radius: 100px;
  border-width: 1px;
  border-style: solid;

  color: ${({ theme }) => theme.colors.white100};
  font-weight: 600;
  line-height: 1rem;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "solid":
      case undefined:
        return css`
          background-color: ${theme.colors.gray60};
          color: ${theme.colors.white100};
          border-color: transparent;
        `;

      case "outline":
        return css`
          background-color: transparent;
          color: ${theme.colors.gray60};
          border-color: ${theme.colors.gray60};
        `;

      case "subtle":
        return css`
          background-color: color-mix(
            in srgb,
            ${theme.colors.gray80} 30%,
            transparent
          );
          color: ${theme.colors.white100};
          border-color: transparent;
        `;
    }
  }}
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  left: 4px;

  svg {
    font-size: 16px;
  }
`;

export const DeleteContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;

  position: absolute;
  right: 6px;
`;

export const TextContainer = styled.span`
  ${ChipContainer}:has(${IconContainer}) & {
    margin-left: 14px;
  }

  ${ChipContainer}:has(${DeleteContainer}) & {
    margin-right: 14px;
  }
`;

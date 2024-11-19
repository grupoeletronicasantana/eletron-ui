import styled, { css } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabsListContainer = styled.div<{ $variant: "line" | "enclosed" }>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "line":
        return css`
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid ${theme.colors.gray90};
        `;
      case "enclosed":
        return css`
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background-color: ${theme.colors.gray90};
          gap: 4px;
          padding: 4px;
        `;
    }
  }}
`;

export const TabTrigger = styled.button<{
  $variant: "line" | "enclosed";
  $isActive: boolean;
}>`
  ${({ $variant, $isActive, theme }) => {
    switch ($variant) {
      case "line":
        return css`
          margin-bottom: -2px;
          border: none;
          background: transparent;
          padding: 8px 16px;
          cursor: pointer;
          transition: color 0.2s;
          width: 100%;

          &:focus-visible {
            outline: 2px solid ${theme.colors.blue_es};
          }

          ${$isActive &&
          css`
            color: ${theme.colors.blue_es};
            border-bottom: 2px solid ${theme.colors.blue_es};
          `}
        `;
      case "enclosed":
        return css`
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
          border: none;
          background-color: ${theme.colors.gray90};
          transition: background-color 0.2s, color 0.2s;
          width: 100%;

          &:focus-visible {
            outline: 2px solid ${theme.colors.blue_es};
          }

          ${$isActive &&
          css`
            background-color: ${theme.colors.blue_es};
            color: ${theme.colors.white100};
          `}
        `;
      default:
        return css`
          padding: 8px 16px;
          cursor: pointer;
        `;
    }
  }}
`;

export const TabContent = styled.div`
  margin-top: 16px;
`;

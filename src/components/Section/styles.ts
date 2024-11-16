import styled, { css } from "styled-components";

export const SectionContainer = styled.section<{
  $variant?: "primary" | "secondary";
}>`
  margin-bottom: 2rem;

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      margin-top: 1rem;

      & {
        margin-bottom: 0;
      }
    `}
`;

export const SectionHeader = styled.div<{
  $titleAlign: "left" | "center" | "right";
}>`
  text-align: ${({ $titleAlign }) => $titleAlign};
`;

export const CollapsibleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const SectionContent = styled.div``;

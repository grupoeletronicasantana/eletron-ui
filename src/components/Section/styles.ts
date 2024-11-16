import styled from "styled-components";

export const SectionContainer = styled.section`
  margin-bottom: 2rem;
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

export const SectionContent = styled.div`
  padding-top: 1rem;
`;

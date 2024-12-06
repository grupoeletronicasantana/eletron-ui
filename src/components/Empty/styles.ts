import { styled } from "styled-components";

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;

  border: 2px dashed ${({ theme }) => theme.colors.gray40};
  border-radius: 12px;

  text-align: center;

  svg {
    font-size: 48px;
  }
`;

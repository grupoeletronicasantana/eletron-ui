import styled from "styled-components";

export const CardWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
`;

export const CardHeaderContainer = styled.div`
  padding: 12px 32px;
  background-color: ${({ theme }) => theme.colors.white100};
  border: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
  font-size: 18px;
`;

export const CardFooterContainer = styled.div`
  padding: 12px 32px;
  background-color: ${({ theme }) => theme.colors.white100};
  border: 1px solid #ddd;
  border-radius: 0 0 8px 8px;
  font-size: 14px;
`;

export const CardBodyContainer = styled.div`
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 8px;

  border: 1px solid #ddd;

  ${CardWrapperContainer}:has(${CardHeaderContainer}) & {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
  }

  ${CardWrapperContainer}:has(${CardFooterContainer}) & {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
  }
`;

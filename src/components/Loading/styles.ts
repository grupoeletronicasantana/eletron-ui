import { styled, css } from "styled-components";

export const FullScreenLoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.gray10};
  width: 100vw;
  height: 100vh;
  z-index: 9999999999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

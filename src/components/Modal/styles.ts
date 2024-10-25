import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed;
  min-width: auto;
  max-width: 80vw;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 16px;
  padding: 2rem 3rem;

  > button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 2rem;

  > h2 {
    line-height: 80%;
  }

  > span {
    line-height: 80%;
    font-size: 14px;
    opacity: 0.8;
  }
`;

export const ModalBodyContainer = styled.div<{
  $align?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
}>`
  text-align: ${({ $align }) => ($align ? $align : "left")};
`;

export const ModalFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;

  margin-top: 2em;
  margin-left: auto;

  button {
    width: fit-content;
  }
`;

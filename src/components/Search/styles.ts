import { styled } from "styled-components";
import { Input } from "../Forms";

export const SearchContainer = styled.div`
  width: 500px;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.blue_es};
  }
`;

export const SearchInput = styled(Input)``;

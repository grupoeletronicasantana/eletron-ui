import { styled } from "styled-components";
import { InputContainer } from "../Forms/styles";

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

export const SearchInput = styled(InputContainer)`
  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

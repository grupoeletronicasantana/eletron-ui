import styled, { css } from "styled-components";

export const SeparatorContainer = styled.hr<{
  $marginTop?: string;
  $marginBottom?: string;
}>`
  color: ${({ theme }) => theme.colors.gray20};

  ${({ $marginTop, $marginBottom }) => css`
    ${$marginTop &&
    css`
      margin-top: ${$marginTop};
    `}
    ${$marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `}
  `}
`;

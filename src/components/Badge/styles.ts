import { styled, css } from "styled-components";

export const BadgeContainer = styled.span<{
  $variant?: "solid" | "outline" | "subtle";
  $colorPalette?: "green" | "red" | "yellow" | "orange" | "blue";
}>`
  display: inline-flex;
  align-items: center;

  padding: 2px 10px;
  border-radius: 100px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;

  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;

  ${({ $variant, $colorPalette, theme }) => {
    switch ($variant) {
      case "solid":
      case undefined:
        if (!$colorPalette) {
          return css`
            background-color: ${theme.colors.gray60};
            color: ${theme.colors.white100};
            border-color: transparent;
          `;
        }

        if ($colorPalette == "green") {
          return css`
            background-color: ${theme.colors.green50};
            color: ${theme.colors.white100};
          `;
        }

        if ($colorPalette == "blue") {
          return css`
            background-color: ${theme.colors.blue50};
            color: ${theme.colors.white100};
          `;
        }

        if ($colorPalette == "yellow") {
          return css`
            background-color: ${theme.colors.yellow50};
            color: ${theme.colors.white100};
          `;
        }

        if ($colorPalette == "orange") {
          return css`
            background-color: ${theme.colors.orange50};
            color: ${theme.colors.white100};
            border-color: ${theme.colors.orange50};
          `;
        }

        if ($colorPalette == "red") {
          return css`
            background-color: ${theme.colors.red50};
            color: ${theme.colors.white100};
            border-color: ${theme.colors.red50};
          `;
        }

      case "outline":
        if (!$colorPalette) {
          return css`
            background-color: transparent;
            color: ${theme.colors.gray60};
            border-color: ${theme.colors.gray60};
          `;
        }

        if ($colorPalette == "green") {
          return css`
            background-color: transparent;
            color: ${theme.colors.green50};
            border-color: ${theme.colors.green50};
          `;
        }

        if ($colorPalette == "blue") {
          return css`
            background-color: transparent;
            color: ${theme.colors.blue50};
            border-color: ${theme.colors.blue50};
          `;
        }

        if ($colorPalette == "yellow") {
          return css`
            background-color: transparent;
            color: ${theme.colors.yellow50};
            border-color: ${theme.colors.yellow50};
          `;
        }

        if ($colorPalette == "orange") {
          return css`
            background-color: transparent;
            color: ${theme.colors.orange50};
            border-color: ${theme.colors.orange50};
          `;
        }

        if ($colorPalette == "red") {
          return css`
            background-color: transparent;
            color: ${theme.colors.red50};
            border-color: ${theme.colors.red50};
          `;
        }

      case "subtle":
        if (!$colorPalette) {
          return css`
            background-color: color-mix(
              in srgb,
              ${theme.colors.gray80} 30%,
              transparent
            );
            color: ${theme.colors.white100};
            border-color: transparent;
          `;
        }

        if ($colorPalette == "green") {
          return css`
            background-color: color-mix(
              in srgb,
              ${theme.colors.green40} 25%,
              transparent
            );
            color: ${theme.colors.green70};
          `;
        }

        if ($colorPalette == "blue") {
          return css`
            background-color: color-mix(
              in srgb,
              ${theme.colors.blue40} 25%,
              transparent
            );
            color: ${theme.colors.blue60};
          `;
        }

        if ($colorPalette == "yellow") {
          return css`
            background-color: color-mix(
              in srgb,
              ${theme.colors.yellow50} 25%,
              transparent
            );
            color: ${theme.colors.yellow60};
          `;
        }

        if ($colorPalette == "orange") {
          return css`
            background-color: color-mix(
              in srgb,
              ${theme.colors.orange40} 25%,
              transparent
            );
            color: ${theme.colors.orange50};
          `;
        }

        if ($colorPalette == "red") {
          return css`
            background-color: color-mix(
              in srgb,
              ${theme.colors.red40} 25%,
              transparent
            );
            color: ${theme.colors.red50};
          `;
        }
    }
  }}
`;

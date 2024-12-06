import { BadgeContainer } from "./styles";

interface BadgeProps {
  label: string;
  variant?: "solid" | "outline" | "subtle";
  colorPalette?: "green" | "red" | "yellow" | "orange" | "blue";
}

function Badge({ variant = "solid", colorPalette, label }: BadgeProps) {
  return (
    <BadgeContainer $variant={variant} $colorPalette={colorPalette}>
      {label}
    </BadgeContainer>
  );
}

export { Badge };

import { SpinnerContainer } from "./styles";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
}

function Spinner({ size = "md" }: SpinnerProps) {
  return <SpinnerContainer $size={size} />;
}

export { Spinner };

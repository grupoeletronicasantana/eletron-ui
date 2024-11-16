import { SeparatorContainer } from "./styles";

interface SeparatorProps {
  marginTop?: string;
  marginBottom?: string;
}

function Separator({ marginTop, marginBottom }: SeparatorProps) {
  return (
    <SeparatorContainer $marginTop={marginTop} $marginBottom={marginBottom} />
  );
}

export { Separator };

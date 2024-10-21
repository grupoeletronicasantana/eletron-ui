import { LoadSpinContainer, FullScreenLoadingContainer } from "./styles";

interface LoadSpinProps {
  size?: "xs" | "s" | "md" | "lg" | "xl" | null;
}

function FullScreenLoading() {
  return (
    <FullScreenLoadingContainer>
      <LoadSpin size="xl" />
    </FullScreenLoadingContainer>
  );
}

function LoadSpin({ size = "md" }: LoadSpinProps) {
  return <LoadSpinContainer $size={size} />;
}

export { FullScreenLoading, LoadSpin };

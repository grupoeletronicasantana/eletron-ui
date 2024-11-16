import { FullScreenLoadingContainer } from "./styles";

import { Spinner } from "../Spinner";

function FullScreenLoading() {
  return (
    <FullScreenLoadingContainer>
      <Spinner size="xl" />
    </FullScreenLoadingContainer>
  );
}

export { FullScreenLoading };

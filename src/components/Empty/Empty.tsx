import { EmptyContainer } from "./styles";

interface EmptyProps {
  title: string;
  description?: string;
}

import { ImFilesEmpty } from "react-icons/im";

function Empty({ title, description }: EmptyProps) {
  return (
    <EmptyContainer>
      <ImFilesEmpty size={64} />
      <h2>{title}</h2>
      <p>{description}</p>
    </EmptyContainer>
  );
}

export { Empty };

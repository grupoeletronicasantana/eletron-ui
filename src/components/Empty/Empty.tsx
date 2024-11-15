import { EmptyContainer } from "./styles";

interface EmptyProps {
  title: string;
  description?: string;
}

import { ImFilesEmpty } from "react-icons/im";

function Empty({ title, description }: EmptyProps) {
  return (
    <EmptyContainer>
      <ImFilesEmpty />
      <h1>{title}</h1>
      <p>{description}</p>
    </EmptyContainer>
  );
}

export { Empty };

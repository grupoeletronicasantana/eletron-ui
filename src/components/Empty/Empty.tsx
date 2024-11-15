import { EmptyContainer } from "./styles";

import { IconType } from "react-icons";

interface EmptyProps {
  icon: React.ReactElement<IconType>;
  title: string;
  description?: string;
}

function Empty({ icon, title, description }: EmptyProps) {
  return (
    <EmptyContainer>
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
    </EmptyContainer>
  );
}

export { Empty };

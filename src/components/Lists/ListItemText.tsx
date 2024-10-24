import {
  ListItemTextContainer,
  ListItemTextTitle,
  ListItemTextSubtitle,
} from "./styles";

interface ListItemTextProps {
  title: string;
  description?: string;
}

function ListItemText({ title, description }: ListItemTextProps) {
  return (
    <ListItemTextContainer>
      <ListItemTextTitle>{title}</ListItemTextTitle>
      {description && (
        <ListItemTextSubtitle>{description}</ListItemTextSubtitle>
      )}
    </ListItemTextContainer>
  );
}

export { ListItemText };

export type { ListItemTextProps };

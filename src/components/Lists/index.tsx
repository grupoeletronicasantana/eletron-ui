import { IconType } from "react-icons";

import {
  ListContainer,
  ListItemContainer,
  ListItemTextContainer,
  ListItemTextTitle,
  ListItemTextSubtitle,
  ListItemActionContainer,
  ListItemIconContainer,
  ListItemIconAvatarContainer,
} from "./styles";

interface ListProps {
  children:
    | React.ReactElement<ListItemProps>
    | Array<React.ReactElement<ListItemProps>>;
}

interface ListItemProps {
  children:
    | React.ReactElement<ListItemTextProps>
    | Array<
        React.ReactElement<
          ListItemIconProps | ListItemTextProps | ListItemActionsProps
        >
      >;
}

interface ListItemTextProps {
  title: string;
  description?: string;
}

interface ListItemIconProps {
  icon: IconType;
  size?: number;
  avatar?: boolean | undefined;
}

interface ListItemActionsProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

function List({ children }: ListProps) {
  return <ListContainer>{children}</ListContainer>;
}

function ListItem({ children }: ListItemProps) {
  return <ListItemContainer>{children}</ListItemContainer>;
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

function ListItemIcon({ icon: Icon, size = 22, avatar }: ListItemIconProps) {
  return (
    <ListItemIconContainer>
      {avatar ? (
        <ListItemIconAvatarContainer>
          {Icon && <Icon size={18} />}
        </ListItemIconAvatarContainer>
      ) : (
        Icon && <Icon size={size} />
      )}
    </ListItemIconContainer>
  );
}

function ListItemAction({ children }: ListItemActionsProps) {
  return <ListItemActionContainer>{children}</ListItemActionContainer>;
}

export { List, ListItem, ListItemIcon, ListItemText, ListItemAction };

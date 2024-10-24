import {
  ListContainer,
  ListItemContainer,
  ListItemActionContainer,
  ListItemIconContainer,
  ListItemIconAvatarContainer,
} from "./styles";

import { ListItemTextProps } from "./ListItemText";

import { IconType } from "react-icons";

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

interface ListItemIconProps {
  icon: React.ReactElement<IconType>;
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

function ListItemIcon({ icon, avatar }: ListItemIconProps) {
  return (
    <ListItemIconContainer>
      {avatar ? (
        <ListItemIconAvatarContainer>
          {icon && icon}
        </ListItemIconAvatarContainer>
      ) : (
        icon && icon
      )}
    </ListItemIconContainer>
  );
}

function ListItemAction({ children }: ListItemActionsProps) {
  return <ListItemActionContainer>{children}</ListItemActionContainer>;
}

export { List, ListItem, ListItemIcon, ListItemAction };

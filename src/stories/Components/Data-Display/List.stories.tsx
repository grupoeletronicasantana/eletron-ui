import type { Meta, StoryObj } from "@storybook/react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAction,
} from "@components/Lists";

import { FaFolder, FaTrashAlt, FaPen, FaEllipsisV } from "react-icons/fa";
import { ButtonIcon } from "@components/Button";

const meta = {
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "React.ReactElement",
      control: false,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({}) => {
    return (
      <List>
        <ListItem>
          <ListItemIcon icon={<FaFolder />} />
          <ListItemText title="Titulo 1" description="Descrição 1" />
          <ListItemAction>
            <ButtonIcon icon={<FaPen />} />
            <ButtonIcon icon={<FaTrashAlt />} />
            <ButtonIcon icon={<FaEllipsisV />} />
          </ListItemAction>
        </ListItem>
        <ListItem>
          <ListItemIcon icon={<FaFolder />} />
          <ListItemText title="Titulo 2" description="Descrição 2" />
          <ListItemAction>
            <ButtonIcon icon={<FaPen />} />
            <ButtonIcon icon={<FaTrashAlt />} />
            <ButtonIcon icon={<FaEllipsisV />} />
          </ListItemAction>
        </ListItem>
        <ListItem>
          <ListItemIcon icon={<FaFolder />} />
          <ListItemText title="Titulo 3" description="Descrição 3" />
          <ListItemAction>
            <ButtonIcon icon={<FaPen />} />
            <ButtonIcon icon={<FaTrashAlt />} />
            <ButtonIcon icon={<FaEllipsisV />} />
          </ListItemAction>
        </ListItem>
      </List>
    );
  },
};

export const WithAvatar: Story = {
  render: ({}) => {
    return (
      <List>
        <ListItem>
          <ListItemIcon icon={<FaFolder />} avatar />
          <ListItemText title="Titulo 1" description="Descrição 1" />
          <ListItemAction>
            <ButtonIcon icon={<FaPen />} />
            <ButtonIcon icon={<FaTrashAlt />} />
            <ButtonIcon icon={<FaEllipsisV />} />
          </ListItemAction>
        </ListItem>
        <ListItem>
          <ListItemIcon icon={<FaFolder />} avatar />
          <ListItemText title="Titulo 2" description="Descrição 2" />
          <ListItemAction>
            <ButtonIcon icon={<FaPen />} />
            <ButtonIcon icon={<FaTrashAlt />} />
            <ButtonIcon icon={<FaEllipsisV />} />
          </ListItemAction>
        </ListItem>
        <ListItem>
          <ListItemIcon icon={<FaFolder />} avatar />
          <ListItemText title="Titulo 3" description="Descrição 3" />
          <ListItemAction>
            <ButtonIcon icon={<FaPen />} />
            <ButtonIcon icon={<FaTrashAlt />} />
            <ButtonIcon icon={<FaEllipsisV />} />
          </ListItemAction>
        </ListItem>
      </List>
    );
  },
};

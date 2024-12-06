import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "@components/Chip";

import { FaUserCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const meta = {
  title: "Components/Data Display/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Usado para apresentar status ou valores, com interação.",
      },
    },
  },
  args: {
    label: "Chip",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    return (
      <div style={styles}>
        <Chip label="Solid" />
        <Chip label="Outline" variant="outline" />
        <Chip label="Subtle" variant="subtle" />
      </div>
    );
  },
};

export const Deletable: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    const handleDelete = () => {
      console.info("You clicked the delete icon.");
    };

    return (
      <div style={styles}>
        <Chip label="Solid" onDelete={handleDelete} />
        <Chip label="Outline" onDelete={handleDelete} variant="outline" />
        <Chip label="Subtle" onDelete={handleDelete} variant="subtle" />
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    return (
      <div style={styles}>
        <Chip icon={<FaUserCircle />} label="Solid" />
        <Chip icon={<FaUserCircle />} label="Outline" variant="outline" />
        <Chip icon={<FaUserCircle />} label="Subtle" variant="subtle" />
      </div>
    );
  },
};

export const WithBoth: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    const handleDelete = () => {
      console.info("You clicked the delete icon.");
    };

    return (
      <div style={styles}>
        <Chip icon={<FaUserCircle />} label="Solid" onDelete={handleDelete} />
        <Chip
          icon={<FaUserCircle />}
          label="Outline"
          onDelete={handleDelete}
          variant="outline"
        />
        <Chip
          icon={<FaUserCircle />}
          label="Subtle"
          onDelete={handleDelete}
          variant="subtle"
        />
      </div>
    );
  },
};

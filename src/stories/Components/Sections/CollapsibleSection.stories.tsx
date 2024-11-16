import type { Meta, StoryObj } from "@storybook/react";

import { CollapsibleSection } from "@components/Section";

const meta = {
  tags: ["autodocs"],
  component: CollapsibleSection,
  args: {
    id: "section_collapse",
    title: "Collapsible Section",
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium earum accusantium cupiditate. Dolor repudiandae nisi, recusandae at aut consequuntur sunt maxime cupiditate assumenda. Nam architecto quaerat consectetur omnis sint nostrum.",
  },
} satisfies Meta<typeof CollapsibleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

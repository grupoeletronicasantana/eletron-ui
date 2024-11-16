import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "@components/Section";

const meta = {
  tags: ["autodocs"],
  component: Section,
  args: {
    id: "section_teste",
    title: "Seção",
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium earum accusantium cupiditate. Dolor repudiandae nisi, recusandae at aut consequuntur sunt maxime cupiditate assumenda. Nam architecto quaerat consectetur omnis sint nostrum.",
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleAlign: Story = {
  render: ({}) => {
    return (
      <>
        <Section id="left" title="Left" titleAlign="left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          earum accusantium cupiditate. Dolor repudiandae nisi, recusandae at
          aut consequuntur sunt maxime cupiditate assumenda. Nam architecto
          quaerat consectetur omnis sint nostrum.
        </Section>
        <Section id="center" title="Center" titleAlign="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          earum accusantium cupiditate. Dolor repudiandae nisi, recusandae at
          aut consequuntur sunt maxime cupiditate assumenda. Nam architecto
          quaerat consectetur omnis sint nostrum.
        </Section>
        <Section id="right" title="Right" titleAlign="right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          earum accusantium cupiditate. Dolor repudiandae nisi, recusandae at
          aut consequuntur sunt maxime cupiditate assumenda. Nam architecto
          quaerat consectetur omnis sint nostrum.
        </Section>
      </>
    );
  },
};

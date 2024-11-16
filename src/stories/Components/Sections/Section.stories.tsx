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

export const Secondary: Story = {
  render: ({}) => {
    return (
      <>
        <Section id="primary_1" title="Primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
          vero maxime, recusandae cupiditate, labore explicabo consectetur iusto
          fugiat saepe ut a dolorem debitis incidunt nobis in necessitatibus!
          Iste, est?
          <Section id="secondary_1" title="Secondary First" variant="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
            vero maxime, recusandae cupiditate, labore explicabo consectetur
            iusto fugiat saepe ut a dolorem debitis incidunt nobis in
            necessitatibus! Iste, est?
          </Section>
          <Section
            id="secondary_2"
            title="Secondary Second"
            variant="secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
            vero maxime, recusandae cupiditate, labore explicabo consectetur
            iusto fugiat saepe ut a dolorem debitis incidunt nobis in
            necessitatibus! Iste, est?
          </Section>
        </Section>
        <Section id="primary_2" title="Primary">
          <Section id="secondary_3" title="Secondary" variant="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
            vero maxime, recusandae cupiditate, labore explicabo consectetur
            iusto fugiat saepe ut a dolorem debitis incidunt nobis in
            necessitatibus! Iste, est?
          </Section>
          <Section id="secondary_4" title="Secondary" variant="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
            vero maxime, recusandae cupiditate, labore explicabo consectetur
            iusto fugiat saepe ut a dolorem debitis incidunt nobis in
            necessitatibus! Iste, est?
          </Section>
        </Section>
      </>
    );
  },
};

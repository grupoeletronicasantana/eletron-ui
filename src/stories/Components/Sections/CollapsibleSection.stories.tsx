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

export const ClosedByDefault: Story = {
  args: {
    defaultOpen: false,
  },
};

export const Secondary: Story = {
  render: ({}) => {
    return (
      <>
        <CollapsibleSection id="primary_1" title="Primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
          vero maxime, recusandae cupiditate, labore explicabo consectetur iusto
          fugiat saepe ut a dolorem debitis incidunt nobis in necessitatibus!
          Iste, est?
          <CollapsibleSection
            id="secondary_1"
            title="Secondary First"
            variant="secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
            vero maxime, recusandae cupiditate, labore explicabo consectetur
            iusto fugiat saepe ut a dolorem debitis incidunt nobis in
            necessitatibus! Iste, est?
          </CollapsibleSection>
          <CollapsibleSection
            id="secondary_2"
            title="Secondary Second"
            variant="secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
            vero maxime, recusandae cupiditate, labore explicabo consectetur
            iusto fugiat saepe ut a dolorem debitis incidunt nobis in
            necessitatibus! Iste, est?
          </CollapsibleSection>
        </CollapsibleSection>
        <CollapsibleSection id="primary_2" title="Primary">
          <CollapsibleSection
            id="secondary_3"
            title="Secondary"
            variant="secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
            vero maxime, recusandae cupiditate, labore explicabo consectetur
            iusto fugiat saepe ut a dolorem debitis incidunt nobis in
            necessitatibus! Iste, est?
          </CollapsibleSection>
          <CollapsibleSection
            id="secondary_4"
            title="Secondary"
            variant="secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at
            vero maxime, recusandae cupiditate, labore explicabo consectetur
            iusto fugiat saepe ut a dolorem debitis incidunt nobis in
            necessitatibus! Iste, est?
          </CollapsibleSection>
        </CollapsibleSection>
      </>
    );
  },
};

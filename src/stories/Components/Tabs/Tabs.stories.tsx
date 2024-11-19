import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@components/Tabs";

const meta = {
  title: "Components/Tabs/Tabs",
  tags: ["autodocs"],
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          "Componente para dividir sua página, card ou modal em abas, permitindo mais informações em espaços reduzidos",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: false,
    },
    children: {
      table: {
        type: { summary: "React.ReactElement" },
        control: false,
      },
    },
  },
  args: {
    children: [
      <TabsList key="tabs-list">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>,
      <TabsContent value="tab1">Content for Tab 1</TabsContent>,
      <TabsContent value="tab2">Content for Tab 2</TabsContent>,
      <TabsContent value="tab3">Content for Tab 3</TabsContent>,
    ],
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Enclosed: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "É possível mudar o visual da Tabs indicando que deseja usar a varaiante enclosed.",
      },
    },
  },
  args: {
    variant: "enclosed",
  },
};

export const DefaultValue: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Caso existe a necessidade também é possível indicar qual Tab você deseja que fique aberta inicialmente, se não, por padrão ele vai sempre pegar a TabsContent.",
      },
    },
  },
  args: {
    defaultValue: "tab2",
  },
};

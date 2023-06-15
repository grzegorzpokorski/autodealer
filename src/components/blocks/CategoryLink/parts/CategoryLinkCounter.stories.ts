import type { Meta, StoryObj } from "@storybook/react";
import { CategoryLinkCounter } from "./CategoryLinkCounter";

const meta = {
  component: CategoryLinkCounter,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "number",
    },
  },
} satisfies Meta<typeof CategoryLinkCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "15",
  },
};

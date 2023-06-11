import type { Meta, StoryObj } from "@storybook/react";
import { CategoryLinkCounter } from "./CategoryLinkCounter";

const meta: Meta<typeof CategoryLinkCounter> = {
  title: "Components/blocks/CategoryLink/CategoryLinkCounter",
  component: CategoryLinkCounter,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CategoryLinkCounter>;

export const Default: Story = {
  args: {
    children: "10",
  },
};

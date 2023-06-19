import type { Meta, StoryObj } from "@storybook/react";
import { CategoryLink } from "./CategoryLink";

const meta = {
  component: CategoryLink,
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutCounter: Story = {
  args: {
    href: "/",
    children: "Category name",
  },
};

export const WithCounter: Story = {
  args: {
    ...WithoutCounter.args,
  },
  render: (args) => (
    <CategoryLink {...args}>
      {args.children}
      <CategoryLink.Counter>10</CategoryLink.Counter>
    </CategoryLink>
  ),
};

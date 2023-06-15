import type { Meta, StoryObj } from "@storybook/react";
import { CategoryLink } from "./CategoryLink";
import { CategoryLinkCounter } from "./parts/CategoryLinkCounter";
import * as CategoryLinkCounterStory from "./parts/CategoryLinkCounter.stories";

const meta = {
  component: CategoryLink,
  tags: ["autodocs"],
  args: {
    href: "/",
    children: "Category name",
  },
} satisfies Meta<typeof CategoryLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutCounter: Story = {};

export const WithCounter: Story = {
  render: (args) => (
    <CategoryLink {...args}>
      {args.children}
      <CategoryLinkCounter {...CategoryLinkCounterStory.Default.args} />
    </CategoryLink>
  ),
};

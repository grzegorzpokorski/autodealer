import type { Meta, StoryObj } from "@storybook/react";
import { CategoryLink } from "./CategoryLink";

const meta: Meta<typeof CategoryLink> = {
  title: "Components/blocks/CategoryLink/CategoryLink",
  component: CategoryLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CategoryLink>;

export const WithoutCounter: Story = {
  args: {
    href: "/",
    children: "Category name",
  },
};

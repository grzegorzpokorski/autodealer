import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet.",
    as: "h1",
    size: "base",
  },
};

export const H2: Story = {
  args: {
    ...H1.args,
    as: "h2",
  },
};

export const H3: Story = {
  args: {
    ...H1.args,
    as: "h3",
  },
};

export const H4: Story = {
  args: {
    ...H1.args,
    as: "h4",
  },
};

export const AllSizes = () => (
  <div className="flex flex-col gap-4">
    <Heading as="h1" size="base">
      {H1.args?.children}
    </Heading>
    <Heading as="h1" size="md">
      {H1.args?.children}
    </Heading>
    <Heading as="h1" size="lg">
      {H1.args?.children}
    </Heading>
  </div>
);

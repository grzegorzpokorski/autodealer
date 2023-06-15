import type { Meta, StoryObj } from "@storybook/react";
import { FeatureTitle } from "./FeatureTitle";

const meta = {
  component: FeatureTitle,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "string",
    },
  },
} satisfies Meta<typeof FeatureTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
};

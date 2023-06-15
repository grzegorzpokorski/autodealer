import type { Meta, StoryObj } from "@storybook/react";
import { FeatureHeader } from "./FeatureHeader";

const meta = {
  component: FeatureHeader,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "string",
    },
  },
} satisfies Meta<typeof FeatureHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
};

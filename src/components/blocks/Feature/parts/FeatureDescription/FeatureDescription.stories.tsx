import type { Meta, StoryObj } from "@storybook/react";
import { FeatureDescription } from "./FeatureDescription";

const meta = {
  component: FeatureDescription,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "string",
    },
  },
} satisfies Meta<typeof FeatureDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores magnam, voluptates corporis dignissimos voluptas dolor nihil esse.",
  },
};

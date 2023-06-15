import type { Meta, StoryObj } from "@storybook/react";
import { FeatureIcon } from "./FeatureIcon";
import { FaUser } from "react-icons/fa";

const meta = {
  component: FeatureIcon,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "string",
    },
  },
} satisfies Meta<typeof FeatureIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <FaUser />,
  },
};

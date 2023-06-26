import type { Meta, StoryObj } from "@storybook/react";
import { BannerSection } from "./BannerSection";

const meta = {
  component: BannerSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="m-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BannerSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    button: {
      href: "/",
      label: "Button",
    },
  },
};

export const WithoutButton: Story = {
  args: {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
};

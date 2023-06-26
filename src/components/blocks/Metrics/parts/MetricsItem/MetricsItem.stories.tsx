import type { Meta, StoryObj } from "@storybook/react";
import { Metrics } from "../../Metrics";
import { MetricsItem } from "./MetricsItem";

const meta = {
  component: MetricsItem,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="m-4">
        <Metrics>
          <Story />
        </Metrics>
      </div>
    ),
  ],
  args: {
    children: <></>,
    bg: "primary",
  },
} satisfies Meta<typeof MetricsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <Metrics.Item {...args}>
      <Metrics.Item.Number>24</Metrics.Item.Number>
      <Metrics.Item.Description>
        nawet do 24 miesięcy dodatkowej gwarancji
      </Metrics.Item.Description>
    </Metrics.Item>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { Metrics } from "./Metrics";

const meta = {
  component: Metrics,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="m-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Metrics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <Metrics {...args}>
      <Metrics.Item bg="primary-dark">
        <Metrics.Item.Number>21</Metrics.Item.Number>
        <Metrics.Item.Description>
          lat doświadczenia w branży
        </Metrics.Item.Description>
      </Metrics.Item>
      <Metrics.Item bg="primary">
        <Metrics.Item.Number>+480</Metrics.Item.Number>
        <Metrics.Item.Description>
          zadowolonych klientów
        </Metrics.Item.Description>
      </Metrics.Item>
      <Metrics.Item bg="primary-light">
        <Metrics.Item.Number>24</Metrics.Item.Number>
        <Metrics.Item.Description>
          nawet do 24 miesięcy dodatkowej gwarancji
        </Metrics.Item.Description>
      </Metrics.Item>
    </Metrics>
  ),
};

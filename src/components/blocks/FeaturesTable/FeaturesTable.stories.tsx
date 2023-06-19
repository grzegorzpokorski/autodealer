import type { Meta, StoryObj } from "@storybook/react";
import { FeaturesTable } from "./FeaturesTable";

const meta = {
  component: FeaturesTable,
  tags: ["autodocs"],
  args: {
    features: {
      kolor: "blue",
      moc: "150",
      pojemnoscSilnika: "1350",
      przebieg: "180000",
      rocznik: "2023",
      typ: "Sedan",
    },
  },
  decorators: [
    (Story) => (
      <div className="prose m-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FeaturesTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

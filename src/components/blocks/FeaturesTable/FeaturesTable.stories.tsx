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
  decorators: [(story) => <div className="prose max-w-none">{story()}</div>],
} satisfies Meta<typeof FeaturesTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

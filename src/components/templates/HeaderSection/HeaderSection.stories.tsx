import type { Meta, StoryObj } from "@storybook/react";
import { HeaderSection } from "./HeaderSection";

const meta = {
  component: HeaderSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="m-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeaderSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Section title",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, porro molestiae. Reiciendis mollitia tempora repellat eos et placeat. Iusto placeat explicabo dicta alias quaerat accusamus quos numquam sit asperiores doloremque?",
  },
};
export const TitleOnly: Story = {
  args: {
    title: "Section title",
  },
};

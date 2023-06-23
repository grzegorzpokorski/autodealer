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

export const Primary: Story = {
  args: {
    children: "Link as button",
    href: "/",
    linkStyle: "primary",
  },
};

export const AllSizes = () => (
  <ul className="list-none flex flex-row items-center gap-4">
    <HeaderSection href="#" linkStyle="primary" size="small">
      {Primary.args.children}
    </HeaderSection>
    <HeaderSection href="#" linkStyle="primary" size="default">
      {Primary.args.children}
    </HeaderSection>
    <HeaderSection href="#" linkStyle="primary" size="large">
      {Primary.args.children}
    </HeaderSection>
  </ul>
);

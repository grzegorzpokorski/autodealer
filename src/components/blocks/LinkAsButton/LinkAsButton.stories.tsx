import type { Meta, StoryObj } from "@storybook/react";
import { LinkAsButton } from "./LinkAsButton";

const meta = {
  component: LinkAsButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="m-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LinkAsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Link as button",
    href: "/",
    linkStyle: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    linkStyle: "secondary",
  },
};

export const White: Story = {
  args: {
    ...Primary.args,
    linkStyle: "white",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const WhiteOutline: Story = {
  args: {
    ...Primary.args,
    linkStyle: "white-outline",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const PrlimaryWhite: Story = {
  args: {
    ...Primary.args,
    linkStyle: "primary-white",
  },
};

export const Contact: Story = {
  args: {
    ...Primary.args,
    linkStyle: "contact",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const AllSizes = () => (
  <ul className="list-none flex flex-row items-center gap-4">
    <LinkAsButton href="#" linkStyle="primary" size="small">
      {Primary.args.children}
    </LinkAsButton>
    <LinkAsButton href="#" linkStyle="primary" size="default">
      {Primary.args.children}
    </LinkAsButton>
    <LinkAsButton href="#" linkStyle="primary" size="large">
      {Primary.args.children}
    </LinkAsButton>
  </ul>
);

import type { Meta, StoryObj } from "@storybook/react";
import { LinkAsButton } from "./LinkAsButton";

const meta: Meta<typeof LinkAsButton> = {
  title: "Components/blocks/LinkAsButton",
  component: LinkAsButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinkAsButton>;

export const Primary: Story = {
  args: {
    children: "Placeholder text for button",
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

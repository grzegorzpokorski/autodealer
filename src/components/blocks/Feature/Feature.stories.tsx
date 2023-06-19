import type { Meta, StoryObj } from "@storybook/react";
import { Feature } from "./Feature";
import { FaUsers } from "react-icons/fa";

const meta = {
  component: Feature,
  decorators: [
    (Story) => (
      <ul className="list-none max-w-sm m-4">
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDescription: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <Feature {...args}>
      <Feature.Header>
        <Feature.Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Feature.Title>
      </Feature.Header>
      <Feature.Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
        tempore pariatur tenetur dolorum cumque ipsa laborum. Modi corrupti et
        cum, quas totam pariatur nam nihil quae, eius eligendi laudantium
        consectetur.
      </Feature.Description>
    </Feature>
  ),
};

export const WithIcon: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <Feature {...args}>
      <Feature.Header>
        <Feature.Icon>
          <FaUsers />
        </Feature.Icon>
        <Feature.Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Feature.Title>
      </Feature.Header>
      <Feature.Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
        tempore pariatur tenetur dolorum cumque ipsa laborum. Modi corrupti et
        cum, quas totam pariatur nam nihil quae, eius eligendi laudantium
        consectetur.
      </Feature.Description>
    </Feature>
  ),
};

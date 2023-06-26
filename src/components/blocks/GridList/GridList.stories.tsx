import type { Meta, StoryObj } from "@storybook/react";
import { GridList } from "./GridList";
import { Feature } from "@/components/blocks/Feature/Feature";

const meta = {
  component: GridList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="m-4">
        <ul className="list-none">
          <Story />
        </ul>
      </div>
    ),
  ],
  args: {
    children: <></>,
    margin: "none",
    gap: "gap-8",
    role: "list",
  },
} satisfies Meta<typeof GridList>;

export default meta;
type Story = StoryObj<typeof meta>;

const DummyFeature = () => {
  return (
    <Feature>
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
  );
};

export const Deafult: Story = {
  render: (args) => (
    <GridList {...args}>
      <DummyFeature />
      <DummyFeature />
      <DummyFeature />
      <DummyFeature />
      <DummyFeature />
    </GridList>
  ),
};

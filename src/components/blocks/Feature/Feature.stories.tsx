import type { Meta, StoryObj } from "@storybook/react";
import { Feature } from "./Feature";
import * as FeatureTitleStories from "./parts/FeatureTitle/FeatureTitle.stories";
import * as FeatureIconStories from "./parts/FeatureIcon/FeatureIcon.stories";
import * as FeatureDescriptionStories from "./parts/FeatureDescription/FeatureDescription.stories";

const meta = {
  component: Feature,
  decorators: [
    (Story) => (
      <ul className="list-none">
        <Story />
      </ul>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: "sm",
    },
  },
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
          {FeatureTitleStories.Default.args.children}
        </Feature.Title>
      </Feature.Header>
      <Feature.Description>
        {FeatureDescriptionStories.Default.args.children}
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
        <Feature.Icon>{FeatureIconStories.Default.args.children}</Feature.Icon>
        <Feature.Title>
          {FeatureTitleStories.Default.args.children}
        </Feature.Title>
      </Feature.Header>
      <Feature.Description>
        {FeatureDescriptionStories.Default.args.children}
      </Feature.Description>
    </Feature>
  ),
};

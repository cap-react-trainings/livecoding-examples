import type { Meta, StoryObj } from "@storybook/react";
import ConditionalText from "./ConditionalText";

const meta: Meta<typeof ConditionalText> = {
  component: ConditionalText,
};

export default meta;
type Story = StoryObj<typeof ConditionalText>;

export const OurConditionalText: Story = {
  args: {
    // we don't have args here
  },
};

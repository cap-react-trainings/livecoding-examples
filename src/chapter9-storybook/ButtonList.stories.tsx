import type { Meta, StoryObj } from "@storybook/react";
import ButtonList from "../chapter3-components_styling/ButtonList";

const meta = {
  title: "ButtonList",
  component: ButtonList,
} satisfies Meta<typeof ButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story's name will be determined by constant naming!
export const ButtonListExample: Story = {
  args: {
    // if our component was asking for properties, we could pass them here!
  },
};

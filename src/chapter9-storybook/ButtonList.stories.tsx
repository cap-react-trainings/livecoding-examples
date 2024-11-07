import type { Meta, StoryObj } from "@storybook/react";
import ButtonList from "../chapter3-components_styling/ButtonList";

const meta = {
  title: "ButtonList",
  component: ButtonList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story's name will be determined by constant naming!
export const ButtonListExample: Story = {
  args: {
    // if our component was asking for properties, we could pass them here!
  },
};

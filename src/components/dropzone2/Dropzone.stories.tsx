import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropzone from "./Dropzone";
const meta = {
  title: "Interface/Dropzone2",
  component: Dropzone,
  tags: ["autodocs"],
  argTypes: {
    fileAdded: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    success: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Main: Story = {
  args: {
    fileAdded: false,
    error: false,
    success: false,
  },
  render: (args) => {
    return (
      <Dropzone {...args}>
        <Dropzone.Heading>Selecteer een DOCX-bestand</Dropzone.Heading>
        <Dropzone.DropBox>Upload bestand</Dropzone.DropBox>
      </Dropzone>
    );
  },
};

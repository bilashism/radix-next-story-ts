import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropzone from "./Dropzone";

const meta = {
  title: "Interface/Dropzone2",
  component: Dropzone,
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Main: Story = {
  render: () => {
    return (
      <Dropzone>
        <Dropzone.Heading>Upload your files</Dropzone.Heading>
        <Dropzone.DropBox>
          Drag & drop your files here or click to select files
        </Dropzone.DropBox>
      </Dropzone>
    );
  },
};

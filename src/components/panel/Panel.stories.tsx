import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Button from '../button/Button'
import Panel from './Panel'

const meta = {
  title: 'Interface/Panel',
  component: Panel,
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof Panel>

export const Right: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="right">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga
          pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem
          nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus
          fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis,
          exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam ex nostrum officia
          vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt accusantium provident
          consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique adipisci, sint sunt
          accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi obcaecati similique
          adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores nam ex nostrum officia vero ea ducimus fuga pariatur commodi
          obcaecati similique adipisci, sint sunt accusantium provident consectetur perspiciatis, exercitationem nulla?
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

export const Left: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="left">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          This is the panel description. This may contain text or any other content.
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

export const Top: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="top">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          This is the panel description. This may contain text or any other content.
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="bottom">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          This is the panel description. This may contain text or any other content.
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

// size stories
export const Content: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="right" size="content">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          This is the panel description. This may contain text or any other content.
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

export const Full: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="right" size="full">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          This is the panel description. This may contain text or any other content.
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

export const Small: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="right" size="sm">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          This is the panel description. This may contain text or any other content.
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

export const Large: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="right" size="lg">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          This is the panel description. This may contain text or any other content.
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

export const ExtraLarge: Story = {
  render: () => (
    <Panel>
      <Panel.Trigger asChild>
        <Button>Click me!</Button>
      </Panel.Trigger>
      <Panel.Content position="right" size="xl">
        <Panel.Title>This is the panel title</Panel.Title>
        <Panel.Description>
          This is the panel description. This may contain text or any other content.
        </Panel.Description>
        <Panel.Footer>This is the footer</Panel.Footer>
      </Panel.Content>
    </Panel>
  ),
}

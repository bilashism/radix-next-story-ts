import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Button from '../button/Button'
import Modal from './Modal'

const meta = {
  title: 'Interface/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Small: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Click me!</Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Panel Title</Modal.Title>
        <Modal.Description>
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
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close>Annuleren</Modal.Close>
          <Button>Actie</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
}

export const Medium: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Click me!</Button>
      </Modal.Trigger>
      <Modal.Content size="md">
        <Modal.Title>This is the panel title</Modal.Title>
        <Modal.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia totam, explicabo consectetur quisquam
          repellendus officia, facilis sit provident labore illum iure sint. Eveniet, magni ea reprehenderit sunt
          incidunt omnis!
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close>Annuleren</Modal.Close>
          <Button>Actie</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
}

export const Large: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Click me!</Button>
      </Modal.Trigger>
      <Modal.Content size="lg">
        <Modal.Title>This is the panel title</Modal.Title>
        <Modal.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia totam, explicabo consectetur quisquam
          repellendus officia, facilis sit provident labore illum iure sint. Eveniet, magni ea reprehenderit sunt
          incidunt omnis!
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close>Annuleren</Modal.Close>
          <Button>Actie</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
}

export const ExtraLarge: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Click me!</Button>
      </Modal.Trigger>
      <Modal.Content size="xl">
        <Modal.Title>This is the panel title</Modal.Title>
        <Modal.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia totam, explicabo consectetur quisquam
          repellendus officia, facilis sit provident labore illum iure sint. Eveniet, magni ea reprehenderit sunt
          incidunt omnis!
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close>Annuleren</Modal.Close>
          <Button>Actie</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
}

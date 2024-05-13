import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Heading from '../heading/Heading'
import Table from './Table'

const meta = {
  title: 'Interface/Table',
  component: Table,
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof Table>

export const Main: Story = {
  args: {
    tableTitle: <Heading variant="h2">Table title</Heading>,
    children: (
      <>
        <Table.Caption>This is a table caption. It can be used to describe the table.</Table.Caption>
        <Table.Header>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head>Amount</Table.Head>
        </Table.Header>
        <Table.Body>
          {Array.from(Array(3)).map((_, index) => (
            <Table.Row key={index}>
              <Table.Cell>INV001</Table.Cell>
              <Table.Cell>Paid</Table.Cell>
              <Table.Cell>Credit Card</Table.Cell>
              <Table.Cell>$250.00</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}

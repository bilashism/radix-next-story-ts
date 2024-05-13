import { render, screen } from '@testing-library/react'
import React from 'react'
import Table from './Table'

describe('Table Component', () => {
  it('renders the table correctly', () => {
    render(
      <Table>
        <Table.Caption>This is a table caption. It can be used to describe the table.</Table.Caption>
        <Table.Header>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head>Amount</Table.Head>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>INV001</Table.Cell>
            <Table.Cell>Paid</Table.Cell>
            <Table.Cell>Credit Card</Table.Cell>
            <Table.Cell>$250.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
  })
  it('renders table caption correctly', () => {
    render(<Table.Caption>This is a table caption. It can be used to describe the table.</Table.Caption>)

    expect(screen.getByText('This is a table caption. It can be used to describe the table.')).toBeInTheDocument()
  })

  it('renders table headers correctly', () => {
    render(
      <Table.Header>
        <Table.Head>Invoice</Table.Head>
        <Table.Head>Status</Table.Head>
        <Table.Head>Method</Table.Head>
        <Table.Head>Amount</Table.Head>
      </Table.Header>,
    )

    expect(screen.getByText('Invoice')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Method')).toBeInTheDocument()
    expect(screen.getByText('Amount')).toBeInTheDocument()
  })

  it('renders table rows and cells correctly', () => {
    render(
      <Table.Body>
        <Table.Row>
          <Table.Cell>INV001</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell>$250.00</Table.Cell>
        </Table.Row>
        {/* Add more rows and cells as needed */}
      </Table.Body>,
    )

    expect(screen.getByText('INV001')).toBeInTheDocument()
    expect(screen.getByText('Paid')).toBeInTheDocument()
    expect(screen.getByText('Credit Card')).toBeInTheDocument()
    expect(screen.getByText('$250.00')).toBeInTheDocument()
  })
  it('renders the table with the correct caption position', () => {
    render(
      <Table captionPosition="top">
        <Table.Caption>This is a table caption. It can be used to describe the table.</Table.Caption>
        <Table.Header>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head>Amount</Table.Head>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>INV001</Table.Cell>
            <Table.Cell>Paid</Table.Cell>
            <Table.Cell>Credit Card</Table.Cell>
            <Table.Cell>$250.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )

    const tableElement = screen.getByRole('table')
    expect(tableElement).toHaveClass('caption-top')
  })
})

import { render, screen } from '@testing-library/react'
import React from 'react'
import ProgressBar from './ProgressBar'

describe('ProgressBar component', () => {
  it('renders the component', () => {
    render(<ProgressBar />)
    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toBeInTheDocument()
  })

  it('renders with indicator', () => {
    render(<ProgressBar indicator value={50} />)
    const progressBar = screen.getByRole('progressbar')
    const indicator = screen.getByText('50%')
    expect(progressBar).toBeInTheDocument()
    expect(indicator).toBeInTheDocument()
  })

  it('renders a label', () => {
    const label = 'Test Label'
    render(<ProgressBar label={label} />)
    const labelElement = screen.getByLabelText(label)
    expect(labelElement).toBeInTheDocument()
  })

  it('renders a description', () => {
    const description = 'bar description'
    render(<ProgressBar description={description} />)
    const descriptionElement = screen.getByText(description)
    expect(descriptionElement).toBeInTheDocument()
  })

  it('renders the children', () => {
    const children = 'bar description'
    render(<ProgressBar>{children}</ProgressBar>)
    const childrenElement = screen.getByText(children)
    expect(childrenElement).toBeInTheDocument()
  })

  it('renders inverted variant', () => {
    render(<ProgressBar variant="inverted" />)
    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toHaveClass('bg-black bg-opacity-25')
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockAllIsIntersecting, resetIntersectionMocking } from 'react-intersection-observer/test-utils'
import Button from '../button/Button'
import Modal from './Modal'
import { MODAL_SIZE } from './ModalContent'

describe('Component - Modal', () => {
  const title = 'Title'
  const openModal = 'Open'
  const body = 'Test modal body'
  const actionLabel = 'Submit'

  const onClick = jest.fn()

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockAllIsIntersecting(true)
    render(
      <Modal>
        <Modal.Trigger asChild>
          <Button>{openModal}</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Title>{title}</Modal.Title>
          <Modal.Description>{body}</Modal.Description>
          <Modal.Footer>
            <Modal.Close data-testid="close-modal">Annuleren</Modal.Close>
            <Button onClick={onClick}>{actionLabel}</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>,
    )
  })

  afterAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    resetIntersectionMocking()
  })

  it('opens and closes the modal when the button is clicked', async () => {
    // Modal content should NOT be visible
    expect(screen.queryByText(title)).toBeFalsy()
    await userEvent.click(screen.getByRole('button', { name: openModal }))

    // Modal content should be visible
    expect(screen.getByText(title)).toBeVisible()
    expect(screen.getByText(body)).toBeVisible()

    // Modal content should NOT be visible after closing
    await userEvent.click(screen.getByTestId('close-modal'))
    expect(screen.queryByText(title)).toBeFalsy()
  })
  it('calls the onClick prop when the button with the specified label is clicked', async () => {
    await userEvent.click(screen.getByRole('button', { name: openModal }))
    await userEvent.click(screen.getByRole('button', { name: actionLabel }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  describe.each(['sm', 'md', 'lg', 'xl'])('size: %s', (size) => {
    it(`renders with the correct classes for variant: ${size}`, async () => {
      render(
        <Modal>
          <Modal.Trigger asChild>
            <Button data-testid="open">{openModal}</Button>
          </Modal.Trigger>
          {/* @ts-ignore */}
          <Modal.Content data-testid="modal-content" size={size}>
            <Modal.Title>{title}</Modal.Title>
            <Modal.Description>{body}</Modal.Description>
            <Modal.Footer>
              <Modal.Close data-testid="close-modal">Annuleren</Modal.Close>
              <Button onClick={onClick}>{actionLabel}</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>,
      )
      expect(screen.queryByText(title)).toBeFalsy()
      await userEvent.click(screen.getByTestId('open'))

      // Modal content should be visible
      expect(screen.getByText(title)).toBeVisible()
      expect(screen.getByText(body)).toBeVisible()

      //@ts-ignore
      expect(screen.getByTestId('modal-content')).toHaveClass(MODAL_SIZE[size])
    })
  })
})

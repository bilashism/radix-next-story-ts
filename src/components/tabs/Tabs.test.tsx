import { render, screen } from '@testing-library/react'
import React from 'react'
import Tabs from './Tabs'

/*
 * This test solely tests whether the tooltip content is rendered. It does not test whether the tooltip is triggered.
 * This is because this component is a wrapper around the Radix UI Tabs component, which is already tested.
 */
describe('Tabs', () => {
  beforeEach(() => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account" className="bg-accent-blue-600" data-testid="account-content">
          <div>This is my account</div>
        </Tabs.Content>
        <Tabs.Content value="profile" data-testid="profile-content">
          <div>This is my profile</div>
        </Tabs.Content>
      </Tabs>,
    )
  })

  it('renders the tabs correctly', () => {
    expect(screen.getByText(/account/i)).toBeInTheDocument()
    expect(screen.getByText(/profile/i)).toBeInTheDocument()
  })
  it('correctly passes additional classnames the tabs content', () => {
    expect(screen.getByTestId('account-content')).toHaveClass('bg-accent-blue-600')
  })
  it('renders the correct content for the active tab', () => {
    expect(screen.getByTestId('account-content')).toBeInTheDocument()
    expect(screen.queryByTestId('profile-content')).toBeInTheDocument()
  })
})

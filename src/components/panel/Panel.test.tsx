import { render, screen } from '@testing-library/react'
import React from 'react'
import Panel from './Panel'
import type { PanelContentProps } from './PanelContent'

describe('Panel/Panel', () => {
  describe.each(['right', 'left', 'top', 'bottom'])('position: %s', (position: string) => {
    it(`renders the modal content when it is opened for each position: ${position}`, () => {
      render(
        <Panel open>
          <Panel.Trigger>Click me!</Panel.Trigger>
          <Panel.Content data-testid="panel-content" position={position as PanelContentProps['position']}>
            <Panel.Title data-testid="panel-title">This is the panel title</Panel.Title>
            <Panel.Description data-testid="panel-description">
              This is the panel description. This may contain text or any other content.
            </Panel.Description>
            <Panel.Footer data-testid="panel-footer">This is the footer</Panel.Footer>
          </Panel.Content>
        </Panel>,
      )

      expect(screen.getByTestId('panel-content')).toBeInTheDocument()
      expect(screen.getByTestId('panel-title')).toBeInTheDocument()
      expect(screen.getByTestId('panel-description')).toBeInTheDocument()
      expect(screen.getByTestId('panel-footer')).toBeInTheDocument()
    })
  })
  describe.each([
    ['full', 'w-screen'],
    ['content', 'max-w-screen'],
    ['sm', 'w-1/4'],
    ['lg', 'w-1/2'],
    ['xl', 'w-5/6'],
  ])('size: %s', (size: string, className: string) => {
    it(`renders the correct modal size when it is opened: ${size}`, () => {
      render(
        <Panel open>
          <Panel.Trigger>Click me!</Panel.Trigger>
          <Panel.Content data-testid="panel-content" size={size as PanelContentProps['size']}>
            <Panel.Title>This is the panel title</Panel.Title>
            <Panel.Description>
              This is the panel description. This may contain text or any other content.
            </Panel.Description>
            <Panel.Footer>This is the footer</Panel.Footer>
          </Panel.Content>
        </Panel>,
      )
      const content = screen.getByTestId('panel-content')

      expect(content).toBeInTheDocument()
      expect(content).toHaveClass(className)
    })
  })
  it('applies additional classNames to each sub-component', () => {
    render(
      <Panel open>
        <Panel.Trigger data-testid="panel-trigger" className="trigger-classname">
          Click me!
        </Panel.Trigger>
        <Panel.Content data-testid="panel-content" className="content-classname">
          <Panel.Title data-testid="panel-title" className="title-classname">
            This is the panel title
          </Panel.Title>
          <Panel.Description data-testid="panel-desc" className="desc-classname">
            This is the panel description. This may contain text or any other content.
          </Panel.Description>
          <Panel.Footer data-testid="panel-footer" className="footer-classname">
            This is the footer
          </Panel.Footer>
        </Panel.Content>
      </Panel>,
    )

    expect(screen.getByTestId('panel-trigger')).toHaveClass('trigger-classname')
    expect(screen.getByTestId('panel-content')).toHaveClass('content-classname')
    expect(screen.getByTestId('panel-title')).toHaveClass('title-classname')
    expect(screen.getByTestId('panel-desc')).toHaveClass('desc-classname')
    expect(screen.getByTestId('panel-footer')).toHaveClass('footer-classname')
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonLink from './ButtonLink'

describe('ButtonLink renders correctly', () => {
  test('it renders with the correct styles and href', () => {
    render(
      <ButtonLink href="/example" borderColor="gray-700" hoverColor="gray-700">
        Click me
      </ButtonLink>
    )

    const buttonLink = screen.getByText('Click me')

    expect(buttonLink).toHaveClass('border-gray-700')
    expect(buttonLink).toHaveClass('p-6')
    expect(buttonLink.closest('a')).toHaveAttribute('href', '/example')
  })

  test('it changes style on hover and reverts on unhover', () => {
    render(
      <ButtonLink href="/example" borderColor="gray-700" hoverColor="gray-700">
        Click me
      </ButtonLink>
    )

    const buttonLink = screen.getByText('Click me')

    userEvent.hover(buttonLink)

    expect(buttonLink).toHaveClass('hover:bg-gray-700')
    userEvent.unhover(buttonLink)

    expect(buttonLink).not.toHaveClass('hover:bg-blue')
  })
})


  


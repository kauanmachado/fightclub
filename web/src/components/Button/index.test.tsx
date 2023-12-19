import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
  test('renders link button correctly', () => {
    const { getByText } = render(
      <Button type="link" href="/example">
        Click me
      </Button>
    );

    const linkButton = getByText('Click me');
    expect(linkButton.tagName).toBe('A');
  });

  test('renders button correctly', () => {
    const { getByText } = render(
      <Button type="button" onClick={() => console.log('Button clicked')}>
        Click me
      </Button>
    );

    const regularButton = getByText('Click me');
    expect(regularButton.tagName).toBe('BUTTON');
  });

  test('handles button click correctly', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button type="button" onClick={onClickMock}>
        Click me
      </Button>
    );

    const button = getByText('Click me');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  test('handles invalid usage correctly', () => {
    const originalError = console.error;
    console.error = jest.fn();

    const { container } = render(<Button type="invalid" />);
    expect(container.firstChild).toBeNull();

    console.error = originalError;
  });
});

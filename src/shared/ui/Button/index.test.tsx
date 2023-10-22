import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '.';

describe('Функционал кнопки', () => {
  test('isThereAClassName', () => {
    render(<Button disabled={true} />);

    expect(screen.getByRole('button')).toBeDisabled();
  });
});

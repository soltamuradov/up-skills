import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConnectionBlock } from '.';

describe('ConnectionBlock', () => {
  test('is there a title tag', () => {
    render(<ConnectionBlock />);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
  });
});

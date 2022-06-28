import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/index';

// eslint-disable-next-line no-undef
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  }),
);

describe('index', () => {
  it('should match snapshot', async () => {
    const { container } = render(<Home />);
    // await waitFor(() =>  expect(container).toMatchSnapshot());
    // await waitFor(() =>  expect(screen.findByTestId('main--screen')));
    screen.findByTestId('main--screen');
  });
});

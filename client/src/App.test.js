import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import setupFetchMock from './mocks/fetchMock';
import App from './app';

describe('<App />', () => {

  test('renders input form for user to input digits', () => {
    render(<App />);
    const inputForm = screen.getByRole("textbox");
    expect(inputForm).toBeInTheDocument();
  });

  test('calls getSuggestedWords API and renders response when form is submitted', async () => {
    render(<App />);

    global.fetch = jest.fn().mockImplementation(setupFetchMock(['a']));

    userEvent.type(screen.getByRole("textbox"), '2');
    userEvent.click(screen.getByRole("button"));

    const apiResponse = await screen.findByText('a');
    expect(apiResponse).toBeInTheDocument();

    global.fetch.mockClear()
  });

  test('renders error message if a character other than digits 2-9 are submitted', () => {
    render(<App />);

    userEvent.type(screen.getByRole("textbox"), '1');
    userEvent.click(screen.getByRole("button"));

    const errorMessage = screen.getByText('* Input must only contain digits 2-9');
    expect(errorMessage).toBeInTheDocument();
  })
});
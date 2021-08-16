import { render, screen } from '@testing-library/react';
import App from './app';

describe('PredictiveTextContainer', () => {

  test('renders input form for user to input digits', () => {
    render(<App />);
    const inputForm = screen.getByPlaceholderText("Input digits (2-9) here");
    expect(inputForm).toBeInTheDocument();
  });
});
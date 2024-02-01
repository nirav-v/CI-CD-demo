import { render, screen } from '@testing-library/react';
import App from '../App';
import { expect } from 'vitest';

describe('<App/> component', () => {
  it('renders', () => {
    render(<App />);
  });
});

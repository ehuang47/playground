import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { expect } from 'vitest';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(baseElement).toBeTruthy();
  });
});

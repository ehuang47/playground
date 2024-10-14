import {render} from '@testing-library/react';

import HomeReact from './home-react';

describe('HomeReact', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<HomeReact />);
    expect(baseElement).toBeTruthy();
  });
});

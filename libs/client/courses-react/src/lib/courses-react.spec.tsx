import {render} from '@testing-library/react';

import CoursesReact from './courses-react';

describe('CoursesReact', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CoursesReact />);
    expect(baseElement).toBeTruthy();
  });
});

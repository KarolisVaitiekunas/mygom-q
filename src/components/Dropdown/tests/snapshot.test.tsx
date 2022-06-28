import { render } from '@testing-library/react';
import Dropdown from '../index';

describe('Dropdown ', () => {
  const { container } = render(<Dropdown />);

  it('should render correctly', () => {
    expect(container).toMatchSnapshot();
  });
});

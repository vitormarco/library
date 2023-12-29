import { render } from '@/utils/tests';
import Loading from '.';

describe('Loading', () => {
  it('should be able render a loading', () => {
    render(<Loading />);
    expect(document.querySelectorAll('span')).toHaveLength(3);
  });
});

import { render } from '@/utils/tests';
import BouncingDots from './BouncingDots';

describe('BouncingDots', () => {
  it('should be able to render bouncing dots loader', () => {
    render(<BouncingDots />);

    expect(document.getElementsByTagName('span')).toHaveLength(3);
  });
});

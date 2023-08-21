import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Slider } from '.';

describe('Slider', () => {
  it('should render', () => {
    render(<Slider />);
  });
});

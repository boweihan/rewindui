import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '.';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Button</Button>);
  });

  it('should pass type prop', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByText('Submit')).toHaveProperty('type', 'submit');

    render(<Button type="button">Button</Button>);
    expect(screen.getByText('Button')).toHaveProperty('type', 'button');
  });

  it('should pass id prop', () => {
    render(<Button id="button-id">Button</Button>);
    expect(screen.getByText('Button')).toHaveProperty('id', 'button-id');
  });

  it('should generate id prop', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toHaveProperty('id');
  });

  it('should disable button', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toHaveProperty('disabled', true);
    expect(screen.getByText('Disabled')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByText('Disabled')).toBeDisabled();
  });

  it('should disable when inside disabled fieldset', () => {
    render(
      <fieldset disabled>
        <Button>Button</Button>
      </fieldset>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should disable on loading state', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByText('Loading')).toHaveProperty('disabled', true);
    expect(screen.getByText('Loading')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByText('Loading')).toBeDisabled();
  });

  it('should add svg spinner', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByText('Loading').querySelector('svg')).toBeInTheDocument();
  });

  it('should render as a link', () => {
    render(
      <Button as="a" href="#">
        Link
      </Button>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should render as a button', () => {
    render(<Button as="button">Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

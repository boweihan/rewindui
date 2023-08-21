'use client';
import { SliderComponent, SliderProps } from '@components/Slider';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<SliderProps> = {
  color: 'dark',
  disabled: false,
  size: 'md',
  tone: 'solid',
  onChange: () => {},
  min: 0,
  max: 100,
  step: 1,
};

// https://www.w3.org/WAI/ARIA/apg/patterns/slider/
const Slider: SliderComponent = forwardRef<HTMLInputElement, SliderProps>(
  (props: SliderProps, ref?: Ref<HTMLInputElement>) => {
    const theme = useComponentTheme('Slider');
    const {
      children,
      className = '',
      color,
      defaultChecked,
      disabled,
      error,
      errorClassName = '',
      label,
      labelClassName = '',
      name,
      onChange,
      value,
      size,
      tone,
      min,
      max,
      step,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const validation = !!error ? 'invalid' : 'valid';
    const ariaLabel: string | undefined = typeof label === 'string' ? label : undefined;

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          className,
          color,
          size,
          tone,
          validation,
        })
      );
    }, [theme, color, tone, size, validation, className]);

    return (
      <div className="flex items-center">
        <input
          id={id}
          ref={ref}
          type="range"
          aria-label={ariaLabel}
          className={classes}
          disabled={disabled}
          onChange={onChange}
          name={name}
          min={min}
          max={max}
          step={step}
          {...additionalProps}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;

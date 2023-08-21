import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from 'react';

export type SliderColor =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type SliderSize = 'sm' | 'md' | 'lg' | 'xl';
export type SliderTone = 'solid' | 'light';

export interface SliderProps extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'type'> {
  color?: SliderColor;
  description?: string | ReactNode;
  descriptionClassName?: string;
  disabled?: boolean;
  error?: string | ReactNode;
  errorClassName?: string;
  label?: string | ReactNode;
  labelClassName?: string;
  size?: SliderSize;
  tone?: SliderTone;
  min?: number;
  max?: number;
}

export type SliderComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SliderProps> & RefAttributes<HTMLInputElement>
> & {
  displayName?: string;
};

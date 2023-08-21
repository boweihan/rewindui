import { Slider, SliderProps, SliderColor, SliderSize, SliderTone } from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView } from '../components/View';

const colors: SliderColor[] = ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'];
const sizes: SliderSize[] = ['sm', 'md', 'lg', 'xl'];
const tones: SliderTone[] = ['solid', 'light'];

const meta: Meta = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    tone: {
      options: tones,
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true, sort: 'alpha' },
  },
};

export default meta;

const DefaultTemplate: Story<SliderProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Slider step={20} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

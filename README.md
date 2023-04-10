---
title: Introduction
description: A quick introduction to Rewind-UI
---

---
# Introduction
Rewind-UI is a powerful [React](https://react.dev) component library designed to help developers save time and effort by providing a comprehensive set of pre-built UI components. The library was created with the goal of solving a common problem faced by many developers - the need to re-write the same UI components repeatedly for each new project.

Built specifically for use with [React](https://react.dev) and [TailwindCSS](https://tailwindcss.com/), Rewind-UI offers a range of accessible, highly customizable components that can be easily integrated into any web application or project. With Rewind-UI, developers can enjoy a streamlined development process and focus on building the core functionality of their projects, rather than worrying about building and styling UI components from scratch.

Our goal with Rewind-UI was to provide a reliable and efficient solution for building UI components, while also ensuring that each component is fully accessible and customizable to meet the specific needs of each project. We believe that Rewind-UI will be an invaluable tool for developers looking to streamline their workflow and deliver high-quality, consistent UIs across all of their projects.

# Installation
Rewind-UI is available as an NPM package and can be installed using the following command:

```bash
npm install @rewind-ui/core
```

# Configuration
Rewind-UI is designed to be used with React and TailwindCSS. To use Rewind-UI, you must first install ReactJS and TailwindCSS in your project. Furthermore, you must also install the following NPM packages:

```bash
npm install @tailwindcss/typography tailwind-scrollbar @tailwindcss/forms
```

After having installed TailwindCSS, you must configure it to work with Rewind-UI. To do this, you must first create a `tailwind.config.js` file in the root directory of your project. Then, add the following code to the file:

```js
module.exports = {
  content: [
    './src/**/*.{html,jsx,tsx}',
    // you can either add all styles
    './node_modules/@rewind-ui/core/src/theme/styles/*.ts',
    // OR you can add only the styles you need
    './node_modules/@rewind-ui/core/src/theme/styles/Button.ts',
    './node_modules/@rewind-ui/core/src/theme/styles/Text.ts'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    })
  ]
};
```

# Usage
To start using Rewind-UI components just add the following import statement to the top of your React component:

```tsx
import { Button } from '@rewind-ui/core';
```

Then, you can use the component in your JSX code:

```tsx
<Button>Click Me</Button>
```

# Properties

Each component has a set of default styles that can be parameterized using the corresponding props. For example, the `Button` component has a default blue color and a medium size. These values can be changed by setting the `color` and `size` props to the component:

```tsx
<Button color="dark" size="sm">Click Me</Button>
```

Moreover, a component can be customized by passing a `className` prop to it. This prop can be used to override the default styles of the component. For example, the following code will change the font weight of the button to bold:

```tsx
  <Button color="dark" size="lg" className="font-semibold">Click Me</Button>
```

# Variants

Trying to avoid to make the user use multiple properties again and again we have create a `variant` prop. A variant is basically a pre-defined set of properties that can be used to customize a component. For example, the `Button` component has a `primary` variant that can be used to create a primary button:

```tsx
  <Button variant="secondary">Click Me</Button>
```

You can read more about the variants of each component in the documentation of the component.

# Customization
All Rewind-UI components are highly customizable. This means that you can easily change the default styles of a component by overriding the corresponding TailwindCSS classes. You can read more about style customisation on the [theming](https://rewind-ui.dev/theming) page.


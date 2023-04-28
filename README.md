# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [calcula-tip.vercel.app](https://calcula-tip.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS modules - for styles
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/)

### What I learned

I've used Material UI a lot and I've used the built in Typography component in a lot of my past projects. But I wanted to make a somewhat similar implementation of it. So I went ahead with this approach. It worked fine for the purpose of this project.

```js
const variantsMapping: Record<(typeof variants)[number], keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
  caption1: 'p',
  caption2: 'p',
}

interface TypographyProps {
  variant?: keyof typeof variantsMapping
  color?: string
  children: ReactNode
}

const Typography: FC<TypographyProps> = ({ variant, color, children, ...props }) => {
  const Component: keyof JSX.IntrinsicElements = variant ? variantsMapping[variant] : 'p'
  return (
    <Component
      className={`typography--variant-${variant}`}
      style={{
        color: color
          ? color.includes('color')
            ? `var(--${color})`
            : color
          : 'var(--color-neutral-dark)',
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
```

### Useful resources

- [React custom hooks - why they are so good](https://kyleshevlin.com/use-encapsulation) - I really liked this pattern and have been using it for quite a while now.

## Author

- Website - [Jagjot Singh](https://jagjot-singh.vercel.app/)
- Frontend Mentor - [@jagjot26](https://www.frontendmentor.io/profile/jagjot26)
- Twitter - [@jagsing26](https://twitter.com/jagsing26)
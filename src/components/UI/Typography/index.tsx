import { FC, ReactNode } from 'react'
import './styles.css'

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subheading1',
  'subheading2',
  'body1',
  'body2',
  'caption1',
  'caption2',
] as const

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
      style={{ color: color ? color : `var(color-neutral-dark)` }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography

import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  inverted?: boolean
}

const Button: FC<ButtonProps> = ({ children, inverted, ...props }) => {
  return (
    <button
      {...props}
      className={cn(styles.button, inverted ? styles.inverted : styles.default)}
    >
      {children}
    </button>
  )
}

export default Button

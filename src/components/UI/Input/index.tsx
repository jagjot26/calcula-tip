import { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  fullWidth?: boolean
}

const Input: FC<InputProps> = ({ icon, fullWidth = true, ...props }) => {
  if (icon)
    return (
      <div className={styles.container}>
        <div className={styles.icon}>{icon}</div>
        <input
          style={{ width: fullWidth ? '100%' : 'inherit' }}
          className={styles.input}
          {...props}
        />
      </div>
    )
  return <input {...props} />
}

export default Input

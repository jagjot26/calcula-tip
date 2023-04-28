import { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'
import Typography from '../Typography'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  error?: string | undefined
  label?: string
}

const Input: FC<InputProps> = ({ icon, label, error, ...props }) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.container}>
        {error && (
          <div style={{ position: 'absolute', top: '-2.5rem', right: '0' }}>
            <Typography variant="caption1" color="red">
              {error}
            </Typography>
          </div>
        )}
        {icon && <div className={styles.icon}>{icon}</div>}
        <input className={cn(error && styles.inputError, styles.input)} {...props} />
      </div>
    </>
  )
}

export default Input

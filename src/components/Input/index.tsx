import React, { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({...props}) => {
  return <input {...props}>Input</input>
} 

export default Input
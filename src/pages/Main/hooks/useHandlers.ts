import { useCallback, useState } from 'react'
import { BillInfoType } from '../types'

function useHandlers() {
  const [billInfo, setBillInfo] = useState<BillInfoType>({
    billAmount: '',
    tipPercent: '',
    numberOfPeople: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setBillInfo((prev) => ({ ...prev, [name]: `${value}` }))
      if (value !== '' && (value === '0' || !e.target.validity.valid)) {
        setErrors((prev) => ({ ...prev, [name]: 'This value is not allowed' }))
      } else {
        if (errors[name]) {
          const tempErrors = { ...errors }
          delete tempErrors[name]
          setErrors(tempErrors)
        }
      }
    },
    [errors]
  )

  const updateTip = useCallback((e: any) => {
    setBillInfo((prev) => ({ ...prev, tipPercent: e.target.value }))
  }, [])

  const handleReset = useCallback(() => {
    setBillInfo({
      billAmount: '',
      tipPercent: '',
      numberOfPeople: '',
    })
    if (Object.keys(errors).length > 0) setErrors({})
  }, [errors])

  return {
    billInfo,
    setBillInfo,
    errors,
    setErrors,
    handleChange,
    updateTip,
    handleReset,
  }
}

export default useHandlers

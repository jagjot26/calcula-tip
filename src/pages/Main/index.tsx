import { useState, useCallback } from 'react'
import Typography from '../../components/UI/Typography'
import PerPersonValues from '../../components/PerPersonValues'
import BillValuesInput from '../../components/BillValuesInput'
import styles from './styles.module.css'

export type BillInfoType = {
  billAmount: string
  tipPercent: number
  numberOfPeople: string
}

const Main = () => {
  const [billInfo, setBillInfo] = useState<BillInfoType>({
    billAmount: '',
    tipPercent: 0,
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
    setBillInfo((prev) => ({ ...prev, tipPercent: +e.target.value }))
  }, [])

  const handleReset = useCallback(() => {
    setBillInfo({
      billAmount: '',
      tipPercent: 0,
      numberOfPeople: '',
    })
    if (Object.keys(errors).length > 0) setErrors({})
  }, [errors])

  return (
    <section className={styles.background}>
      <div className={styles.header}>
        <Typography variant="h5">SPLI</Typography>
        <Typography variant="h5">TTER</Typography>
      </div>
      <div className={styles.container}>
        <BillValuesInput
          billInfo={billInfo}
          handleChange={handleChange}
          updateTip={updateTip}
          errors={errors}
        />
        <PerPersonValues billInfo={billInfo} handleReset={handleReset} />
      </div>
    </section>
  )
}

export default Main

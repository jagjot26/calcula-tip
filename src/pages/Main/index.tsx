import { useState } from 'react'
import Input from '../../components/UI/Input'
import Typography from '../../components/UI/Typography'
import { ReactComponent as DollarIcon } from '../../assets/images/icon-dollar.svg'
import { ReactComponent as PeopleIcon } from '../../assets/images/icon-person.svg'
import styles from './styles.module.css'
import Button from '../../components/UI/Button'

const tipPercents = [5, 10, 15, 25, 50]

const Main = () => {
  const [billInfo, setBillInfo] = useState({
    billAmount: '',
    tipPercent: 0,
    numberOfPeople: '',
  })
  const { billAmount, tipPercent, numberOfPeople } = billInfo
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setBillInfo((prev) => ({ ...prev, [name]: `${value}` }))
    if (value === '0') setErrors((prev) => ({ ...prev, [name]: "Can't be 0" }))
    else {
      if (errors[name]) {
        const tempErrors = { ...errors }
        delete tempErrors[name]
        setErrors(tempErrors)
      }
    }
  }

  const updateTip = (e: any) => {
    setBillInfo((prev) => ({ ...prev, tipPercent: +e.target.value }))
  }

  return (
    <section className={styles.background}>
      <div className={styles.header}>
        <Typography variant="h5">SPLI</Typography>
        <Typography variant="h5">TTER</Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.leftHalf}>
          <div>
            <Typography variant="body1">Bill</Typography>
            <Input
              icon={<DollarIcon />}
              name="billAmount"
              type="number"
              onChange={handleChange}
              value={billAmount}
              min="0"
              error={errors.billAmount}
              autoFocus
            />
          </div>
          <div>
            <Typography variant="body1">Select Tip %</Typography>
            <div className={styles.buttonsGridContainer}>
              {tipPercents.map((percent) => (
                <div className={styles.buttonsGridItem} key={percent}>
                  <Button
                    inverted={percent === tipPercent ? true : false}
                    value={percent}
                    onClick={updateTip}
                  >{`${percent}%`}</Button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Typography variant="body1">Number of People</Typography>
            <Input
              icon={<PeopleIcon />}
              name="numberOfPeople"
              type="number"
              onChange={handleChange}
              value={numberOfPeople}
              min="0"
              error={errors.numberOfPeople}
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Main

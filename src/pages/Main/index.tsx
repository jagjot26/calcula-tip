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
    billAmount: '0',
    tipPercent: 0,
    numberOfPeople: '0',
  })
  const { billAmount, tipPercent, numberOfPeople } = billInfo

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    let updatedValue: string | number = value
    if (type === 'number') updatedValue = Math.abs(+updatedValue)
    setBillInfo((prev) => ({ ...prev, [name]: `${updatedValue}` }))
  }

  return (
    <section className={styles.background}>
      <div className={styles.header}>
        <Typography variant="h5">SPLI</Typography>
        <Typography variant="h5">TTER</Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.leftHalf}>
          <Typography variant="body1">Bill</Typography>
          <Input
            icon={<DollarIcon />}
            name="billAmount"
            type="number"
            onChange={handleChange}
            value={billAmount}
            min="0"
          />
          <Typography variant="body1">Select Tip %</Typography>
          {tipPercents.map((percent) => (
            <Button>{`${percent}%`}</Button>
          ))}
          <Typography variant="body1">Number of People</Typography>
          <Input
            icon={<PeopleIcon />}
            name="numberOfPeople"
            type="number"
            onChange={handleChange}
            value={numberOfPeople}
            min="0"
          />
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Main

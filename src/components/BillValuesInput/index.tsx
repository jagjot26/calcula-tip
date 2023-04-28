import { FC } from 'react'
import styles from '../../pages/Main/styles.module.css'
import Input from '../UI/Input'
import Typography from '../UI/Typography'
import { ReactComponent as DollarIcon } from '../../assets/images/icon-dollar.svg'
import { ReactComponent as PeopleIcon } from '../../assets/images/icon-person.svg'
import Button from '../UI/Button'
import { BillInfoType } from '../../pages/Main'

const tipPercents = [5, 10, 15, 25, 50]
interface BillValuesInputProps {
  billInfo: BillInfoType
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  updateTip: (e: any) => void
  errors: Record<string, string>
}

const BillValuesInput: FC<BillValuesInputProps> = ({
  billInfo,
  handleChange,
  updateTip,
  errors,
}) => {
  const { billAmount, tipPercent, numberOfPeople } = billInfo
  return (
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
  )
}

export default BillValuesInput

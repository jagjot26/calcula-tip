import { FC, useMemo } from 'react'
import styles from '../../pages/Main/styles.module.css'
import Button from '../UI/Button'
import Typography from '../UI/Typography'
import { BillInfoType } from '../../pages/Main'

const values = [
  {
    name: 'Tip Amount',
    value: 0,
  },
  {
    name: 'Total',
    value: 0,
  },
]

interface PerPersonValuesProps {
  billInfo: BillInfoType
  handleReset: () => void
}

const PerPersonValues: FC<PerPersonValuesProps> = ({ billInfo, handleReset }) => {
  const { billAmount, tipPercent, numberOfPeople } = billInfo

  const perPersonValues: typeof values = useMemo(() => {
    const billAmountValue = +billAmount
    const numberOfPeopleValue = +numberOfPeople
    const calculatedValues = values
    calculatedValues[0].value = 0
    calculatedValues[1].value = 0
    if (!tipPercent || billAmountValue <= 0 || numberOfPeopleValue <= 0)
      return calculatedValues
    const tipAmount = (tipPercent / 100) * billAmountValue
    calculatedValues[0].value = tipAmount / numberOfPeopleValue //tip per person
    calculatedValues[1].value = (billAmountValue + tipAmount) / numberOfPeopleValue //total per person
    return calculatedValues
  }, [tipPercent, billAmount, numberOfPeople])

  return (
    <div className={styles.rightHalf}>
      <div className={styles.perPersonContainer}>
        {perPersonValues.map((info) => (
          <div key={info.name} className={styles.perPersonRow}>
            <div>
              <Typography variant="body1" color="color-neutral-light">
                {info.name}
              </Typography>
              <Typography variant="caption1" color="color-neutral-base">
                / person
              </Typography>
            </div>
            <Typography variant="h4" color="color-primary">
              {`$${info.value.toFixed(2)}`}
            </Typography>
          </div>
        ))}
      </div>
      <Button inverted onClick={handleReset}>
        <Typography variant="h4" color="color-neutral-darker">
          RESET
        </Typography>
      </Button>
    </div>
  )
}

export default PerPersonValues

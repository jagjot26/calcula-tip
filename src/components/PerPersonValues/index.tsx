import { FC } from 'react'
import styles from '../../pages/Main/styles.module.css'
import Button from '../UI/Button'
import Typography from '../UI/Typography'
import { BillInfoType} from '../../pages/Main/types'
import useCalculatedValues from './hooks/useCalculatedValues'

interface PerPersonValuesProps {
  billInfo: BillInfoType
  handleReset: () => void
}

const PerPersonValues: FC<PerPersonValuesProps> = ({ billInfo, handleReset }) => {
  const perPersonValues = useCalculatedValues({ billInfo })

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

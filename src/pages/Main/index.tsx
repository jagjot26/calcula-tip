import Typography from '../../components/UI/Typography'
import PerPersonValues from '../../components/PerPersonValues'
import BillValuesInput from '../../components/BillValuesInput'
import styles from './styles.module.css'
import useHandlers from './hooks/useHandlers'

const Main = () => {
  const { billInfo, errors, handleChange, updateTip, handleReset } = useHandlers()

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

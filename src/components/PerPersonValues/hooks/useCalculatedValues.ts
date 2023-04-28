import { useMemo } from 'react'
import { BillInfoType } from '../../../pages/Main'

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

function useCalculatedValues({ billInfo }: { billInfo: BillInfoType }) {
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

  return perPersonValues
}

export default useCalculatedValues

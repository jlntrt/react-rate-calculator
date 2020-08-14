import React, { useState } from 'react';
import './App.css';
import Slider from "./Slider"
import TotalInput from "./TotalInput"
import PriceRow from "./PriceRow"

function App() {
  const [total, setTotal] = useState(3000)
  const [multiplicator] = useState(0.66)
  const [vatrate] = useState(0.16)
  const [deposit, setDeposit] = useState(calculateDeposit(total))
  const [weeklyRate, setWeeklyRate] = useState(calculateDeposit(total))

  function calculateDeposit(total) {
    return total * (vatrate + 1) * 0.1
  }

  function calculateRate(total) {
    return total * multiplicator / 52
  }

  // Deprecated
  // Intl.NumberFormat in <PriceRow /> cares about rounding the value
  // function roundValue(value) {
  //   return value.toFixed(2)
  // }

  function handleChange(event) {
    const { value } = event.target

    setTotal(value)
    setDeposit(calculateDeposit(value))
    setWeeklyRate(calculateRate(value))
  }

  return (
    <section>
      <Slider min={300} max={9999} value={total} step={1} onSliderChange={handleChange} />
      <PriceRow label="Gesamtpreis (netto)" value={total} />
      <TotalInput value={total} onInputChange={handleChange} />
      <PriceRow label="Einmalige Kaution" value={deposit} />
      <PriceRow label="Wöchenlichte Rate (zzgl. MwSt)" value={weeklyRate} />
    </section>
  )
}

export default App;

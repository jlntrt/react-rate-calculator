import React from 'react'

function Slider(props) {
  const { value = 3000, min = 3000, max = 9999, step = 1, onSliderChange } = props
  
  return <input type="range" min={min} max={max} value={value} onChange={onSliderChange} step={step} />
}

export default Slider
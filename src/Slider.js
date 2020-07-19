import React from 'react'

function Slider(props) {
  const { value, min, max } = props
  
  return <input type="range" min={min} max={max} value={value} onChange={props.onSliderChange} step={props.step} />
}

export default Slider
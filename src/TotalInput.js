import React from 'react'

function TotalInput(props) {
  const { value, onInputChange } = props

  return <input type="number" value={value} step="1" onChange={onInputChange} />
}

export default TotalInput
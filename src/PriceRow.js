import React from 'react'
import formatPrice from './ultils/formatPrice'

function PriceRow(props) {
  const { value , label = "Unkown" } = props
  
  return <div>{ label }: { formatPrice(value) }</div>
}

export default PriceRow
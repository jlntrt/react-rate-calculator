import React from 'react'
import formatPrice from './ultils/formatPrice'

function PriceRow(props) {
  const { value , label = "Unkown" } = props
  
  return <div>{ label }: <output>{ formatPrice(value) }</output></div>
}

export default PriceRow
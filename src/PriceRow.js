import React from 'react'

function PriceRow(props) {
  const { value = 0 , label = "Unkown", currency = "EUR", country = "de-DE"} = props
  const price = new Intl.NumberFormat(country, { style: 'currency', currency: currency }).format(value)
  
  return <div>{ label }: { price }</div>
}

export default PriceRow
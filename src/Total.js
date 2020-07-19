import React from 'react'

function Total(props) {
  const { value } = props
  
  return <div>Gesamtpreis (netto): { value } €</div>
}

export default Total
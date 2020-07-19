import React from 'react'

function Deposit(props) {
  const { value } = props
  
  return <div id="deposit">Einmalige Kaution: { value } €</div>
}

export default Deposit
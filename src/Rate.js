import React from 'react'

function Rate(props) {
  const { value } = props
  
  return <div>Wöchenlichte Rate (zzgl. MwSt): { value } €</div>
}

export default Rate
import styled from '@emotion/styled'
import React from 'react'
 
const RadioStyle = styled.input`
  display:none
`

export const MyRadio = ({name, value}) => {
  return (
    <RadioStyle 
      type='radio' 
      name={name}
      value={value} 
      />  
  )
}

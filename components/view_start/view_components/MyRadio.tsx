import styled from '@emotion/styled'
import React from 'react'

const RadioStyle = styled.input`
  display: none;
`

type Props = {
  name:string
  value: string
  id: string
  checked?: boolean
}

export const MyRadio: React.FC<Props> = ({ name, value, id }) => {
  return (
    <RadioStyle 
      type='radio' 
      name={name}
      value={value}
      id={id}
       
      />  
  )
}

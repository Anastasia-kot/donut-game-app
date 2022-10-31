import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { MyRadio } from './MyRadio'
import { MyRange } from './MyRange'
 
const LabelRadioStyle = styled.label`
  background: #FFD748;
  border-radius: 20px;
  height: 44.44px;
  display: block;

  font-family: 'Calibri';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
align-items: center;
text-align: center;

 

color: #423F45;
`

type Props = {
  label: string 
  width: string 
  myRadioParams: { 
    name: string
    value: string
  }
}
export const MyLabelRadio: React.FC<Props> = ({ label, myRadioParams, width }) => {
   return (
     <LabelRadioStyle style={{ 'width': `${width}` }}>
       <span>{label}</span>
       <MyRadio
         name={myRadioParams.name}
         value={myRadioParams.value} />

     </LabelRadioStyle>  
   
  )
}

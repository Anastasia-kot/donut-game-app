import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { MyRange } from './MyRange'
 
const  LabelRangeStyle = styled.label`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #423F45;

    display:block;
    margin: 0 auto;
    margin-bottom:60px;

`

type Props = {

  name: string 
  label: string 
  legend: Array<string|number> 
  width:string  
  myRangeParams: { 
    min: number
    max: number
    step: number 
  }
  onChange?: any 
  onBlur?: any
  value?: any
}
// myRangeParams = {{ min: '1', max: '6', step: '1' }}
export const MyLabelRange: React.FC<Props> = ({
  name, label, legend, width = '355px', myRangeParams }) => {
   return (
    <LabelRangeStyle style={{'width': `${width}`} } >
      <p>{label}</p>
      <p className={css`
        display:flex; 
        justify-content: space-between; 
        width: ${width}; 
        margin: 0 auto;
        margin-top:11px;
        padding:0;

        font-family: 'Calibri';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #4F4B61;`}>
         
         {legend.map(i => <span>{i}</span>)}
      </p>

       <MyRange min={myRangeParams.min}
         max={myRangeParams.max}
         step={myRangeParams.step}
         name={name} 
         /> 

    </LabelRangeStyle>  
  )
}

// onChange = { handleChange }
// onBlur = { handleBlur }
// value = { values.email }
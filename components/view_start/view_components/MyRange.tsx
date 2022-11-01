import styled from '@emotion/styled'
import React from 'react'
 

const RangeStyle = styled.input`
  
  border-radius: 10px;
  display:block;
  margin: 0 auto;
  margin-top:3px;
  width:100%;
 

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

    &::-webkit-slider-runnable-track {
      border-radius: 10px;
      height: 21px;
	    border: none;
      background-color: #FFD748;
      
    }

    &::-webkit-slider-thumb {
      background: #104987;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      width:23px;
      height: 23px;
      -webkit-appearance: none;
      margin-top: -1px;
      margin-left: -1px;
    } 

    &::-moz-range-track {
    	border-radius: 10px/100%;
        height: 5px;
    	border: 1px solid cyan;
    	background-color: #fff;
    }
   &::-moz-range-thumb {
    	background: #ecf0f1;
    	border: 1px solid cyan;
        border-radius: 10px/100%;
    	cursor: pointer;
    }

`

export const MyRange = ({ name, min, max, step,  }) => {
  return (
    <RangeStyle 
      type='range' 
      min={min} 
      max={max}
      step={step}
      name={name}
      />  
  )
}

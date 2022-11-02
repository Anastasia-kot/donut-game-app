import React from 'react'
import { useRouter } from '../../../node_modules/next/router'

import styled from '@emotion/styled'
import { MyLabelRange } from './MyLabelRange'
import { MyLabelRadio } from './MyLabelRadio'
import { MyButton } from './MyButton'
import { MyRadio } from './MyRadio'



const FormStyle = styled.form`
    background: white;
    color: black;
                
    margin: 0 auto;
    box-sizing: border-box;
    Width:699px;
    Height:660px;
    padding:0;
    padding-top:40px;

    border-radius: 40px;
    border: 20px solid grey;
    
    zIndex: '1';
    position: 'relative'

    & input[type=radio] {
	    display: none;
      
    } 
    
    & fieldset {
margin-bottom:89px;
        /* Checked */
        & input[type=radio]:checked + label {
        background: #FFD748;
        opacity:1;
        }
 
        /* Hover */
        & label:hover {
          color: #666;
        }
        
        /* Disabled */
        & input[type=radio]:disabled + label {
          background: #efefef;
          color: #666;
        }
    }
`



export const MyForm = () => {
  const router = useRouter();


  const onSubmit = async (e) => {
    e.preventDefault();
    const { quantity, values, radio } =  e.target;
    router.push(`/game?quantity=${quantity.value}&values=${values.value}&radio=${radio.value ?radio.value :'high' }`)
  }

  return (

    <FormStyle onSubmit={onSubmit}>

      <MyLabelRange key='11' name='quantity' label='Кол-во предметов' legend={[2, 3, 4, 5]} width='355px' myRangeParams={{ min: 2, max: 5, step: 1 }}      />
      <MyLabelRange key='21' name='values' label='Значения' legend={['A', 9, 19, 50, 99, 999]} width='530px' myRangeParams={{ min: 1, max: 6, step: 1 }}  />

      <fieldset style={{ border: 'none', display: 'flex', justifyContent: 'space-between', width: '551px', margin: '0 auto', padding: '10px 0' }} >
        
        <MyRadio id='radio1' name='radio' value='high' checked />
        <MyLabelRadio label='По возрастанию' width='271px' htmlFor='radio1' />

        <MyRadio id='radio2' name='radio' value='low'   />
        <MyLabelRadio label='По убыванию' width='234px' htmlFor='radio2' />
      </fieldset>

      <MyButton text='Играть' />

  
    </FormStyle>








  )
}

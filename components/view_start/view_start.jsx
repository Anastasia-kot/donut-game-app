import styled from '@emotion/styled'
import React from 'react'
import Image from 'next/image'
import { MyButton } from './view_components/MyButton'
import { MyLabelRadio } from './view_components/MyLabelRadio'
import { MyLabelRange } from './view_components/MyLabelRange'

// import background from '../../images/bg_start.png'
const background = require('./../../images/bgStart.png')

const StartViewContainer = styled.div`
    background: darkblue;
    background-image: url(./../../images/bgStart.png);
    padding-top: 91px;
    width:980px;
    height:810px;
    color: black;

`
const MyForm = styled.form`
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

`

export const StartView = () => {
  return (
      <StartViewContainer>
          <Image src={background} style={ { position: 'absolute', top: '0' } }/>
          <MyForm style={ { zIndex: '1', position: 'relative' } }>

                <MyLabelRange label='Кол-во предметов' legend={[2, 3, 4, 5]} width='355px' myRangeParams={{ min: '2', max: '5', step: '1' }} />
                <MyLabelRange label='Значения' legend={['A', 9, 19, 50, 99, 999]} width='530px' myRangeParams={{ min: '1', max: '6', step: '1' }} />

                <fieldset style={ { border: 'none', display: 'flex', justifyContent: 'space-between', width: '551px', margin: '0 auto', padding: '10px 0' }} >
                  <MyLabelRadio label='По возрастанию' width='271px' myRadioParams={{ name: 'radio1', value: 'high' }} />
                  <MyLabelRadio label='По убыванию' width='234px' myRadioParams={{ name: 'radio2', value: 'low' }} />
                </fieldset>

                <MyButton text='Играть' />

            </MyForm>
      </StartViewContainer>
  )
}

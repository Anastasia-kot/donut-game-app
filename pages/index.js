import React from 'react'
import Image from 'next/image'

import styled from '@emotion/styled'

import { MyButton } from './../components/view_start/view_components/MyButton'
import { MyLabelRadio } from './../components/view_start/view_components/MyLabelRadio'
import { MyLabelRange } from './../components/view_start/view_components/MyLabelRange'
import { MyForm } from '../components/view_start/view_components/MyForm'
 

const background = require('./../images/bgStart.png')


//  background: darkblue;
//  background-image: url(./../../images/bgStart.png);
const StartViewContainer = styled.div`
   
    padding-top: 91px;
    width:980px;
    height:810px;
    color: black;

`


 
export default function Home () {
   
  return (
 
    <StartViewContainer>
      <Image src={background}   alt='background' style={{ position: 'absolute', top: '0', zIndex: '-1'}} />
      <MyForm/>
    </StartViewContainer>
    

  )
}

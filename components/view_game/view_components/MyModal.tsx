import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'
import { MyButton } from '../../view_start/view_components/MyButton'
import Image from 'next/image'

const star = require('./../../../images/end_star.svg')
 

  
const DivStyle = styled.div`
  margin:0;
  padding:0;
  box-sizing: border-box;
  display: block;
  Width:661px;
  Height:501px;
  background-color: white;
  border-radius: 62px;
  border: 22px solid grey;
  position: absolute;
  top: 148px;
  left: 167px;
`

const H1Style = styled.h1`
font-family: 'Circe Rounded', arial;
font-style: normal;
font-weight: 400;
font-size: 128px;
line-height: 163px;
margin:0;
margin-top:23px;
margin-bottom:20px;
padding:0; 
text-align: center;

background: linear-gradient(180deg, #FFF9D8 8.65%, #FFE44F 69.58%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`


const PStyle = styled.p`
font-family: 'Circe Rounded Regular5';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 51px;
align-items: center;
text-align: center;

color: #5F40A1;

width: 400px;
padding: 0;

margin: 0 auto;
margin-bottom:78px;


`

type Props = {
  header:string
  content: string 
  buttonText: string
  onClickRoute: string
}

export const MyModal: React.FC<Props> = ({ header, content, buttonText, onClickRoute }) => {

  return (
    <DivStyle>
      <Image src={star} alt='star' style={{position:'absolute', top: '-90px', left:'-70px', width: '150px' }}/>
      <Image src={star} alt='star' style={{ position: 'absolute', top: '80px', right: '-105px' }} />
        <H1Style>{header}</H1Style>
        <PStyle>{content}</PStyle>
        <MyButton text={buttonText} onClickRoute={onClickRoute} />
      <Image src={star} alt='star' style={{ position: 'absolute', bottom: '-80px', left: '-130px' }}/>
      <Image src={star} alt='star' style={{ position: 'absolute', bottom: '-108px', right: '-65px', width: '110px' }} />
    </DivStyle>
  )
}

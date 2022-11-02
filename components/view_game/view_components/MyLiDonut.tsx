import styled from '@emotion/styled'
import React from 'react'
import Image from 'next/image'

const background = require('../../../images/donut-style/donut.svg')


const LiDonutStyle = styled.li`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #FFFFFF;


    display:block;
    border: 1px solid white;
    width: 50px;
    margin: 10px;
    list-style-type: none;
    Width: 157px; 
    Height: 158px;
    position:relative;
`

const SpanStyled1 = styled.span`
  position: absolute;
  left: 35%; 
  top:  35% ;  
  z-index : 1;
  text-shadow : '3px 0px 0px black, 0px 3px 0px black, -3px 0px 0px black, 0px -3px 0px black'  
` 
const SpanStyled2 = styled.span`
  position: absolute;
  left: 0;    
  z-index : 0;
  
` 

export const MyLiDonut = ({ i, onDragStart, onDragEnd, onDragOver, onDrop, gameResult }) => {
 
  return (
    <LiDonutStyle
      draggable={!!i.content && !gameResult}
      onDragStart={gameResult ? ()=>{} : onDragStart}
      onDragEnd={gameResult ? () => { } : onDragEnd}
      onDragOver={gameResult ? () => { } : onDragOver}
      onDrop={gameResult ? () => { } : onDrop}
     >
      <SpanStyled1 >{i.content}</SpanStyled1>
      {i.content && <SpanStyled2><Image src={background} alt='donut'/></SpanStyled2>}

    </LiDonutStyle>
  )
}

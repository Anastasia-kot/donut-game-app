import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'
import { MyButton } from '../../view_start/view_components/MyButton'


const DivStyle = styled.div`
  margin:0;
  padding:0;
  box-sizing: border-box;
  display: block;
  width: 621px;
  height: 480px;
  background-color:blue;
  position: absolute;
  top: 169px;
  left: 186px;
`

type Props = {
  header:string
  content: string 
  buttonText: string
  onClickRoute: string
}

export const MyModal = ({ header, content, buttonText, onClickRoute }) => {

  return (
    <DivStyle >
      <h1>{header}</h1>
      <p>{content}</p>
      <MyButton text={buttonText} onClickRoute={onClickRoute} />
    </DivStyle>
  )
}

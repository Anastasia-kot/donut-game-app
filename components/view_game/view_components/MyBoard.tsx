import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'


const UlStyle = styled.ul`
  margin:0 auto;
  margin-bottom:120px;
  padding:0;
  display: flex;
  align-items:stretch;
  justify-content: space-between;
  width: 905px; 
`

export const MyBoard = ({ isTopBoard, children }) => {

  return (
    <UlStyle 
    className={css`
    height: ${isTopBoard ? 158 + 158: 158}px`}>
      {children}
    </UlStyle>
  )
}

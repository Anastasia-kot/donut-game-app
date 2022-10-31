import styled from '@emotion/styled'
import React from 'react'
 

const LiDonutStyle = styled.li`
    background: #38DF7A;
    border-radius: 20px;
    

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
`



export const MyLiDonut = ({ i, onDragStart, onDragEnd, onDragOver, onDrop }) => {
//   className = { css`cursor: ${i.content ? 'grab' : 'arrow'} `
// }
// draggable = {!!i.content}
 
// onDragStart = {(e) => onDragStartHandler(e, b, i)}
// onDragEnd = {(e) => onDragEndHandler(e)}
// onDragOver = {(e) => onDragOverHandler(e)}
// onDrop = {(e) => onDropHandler(e, b, i)}
// i = { i }
  return (
    <LiDonutStyle
      draggable={!!i.content}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
     >
      {i.content}
    </LiDonutStyle>
  )
}

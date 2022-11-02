import styled from '@emotion/styled'
import React from 'react'
import Link from '../../../node_modules/next/link'

 
 

const ButtonStyle = styled.button`
background: #38DF7A;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
border-radius: 20px;
    margin: 0 auto;
    Width:260px; 
    Height: 60px;
    border:none;
    display:block;

    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    align-items: center;

    color: #FFFFFF;
`

type Props = {
  text: string
  onClickRoute?: string
}


export const MyButton = ({ text, onClickRoute }) => {

  // const onClick = async (e) => {
  //   e.preventDefault();
  //   console.log('кнопка нажата')

  //  await fetch('http://localhost:3000/api/hello',
  // {
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json'  },
  //   body: JSON.stringify({
  //     mainParams: {
  //       quantity: 11,
  //       valuesRange: 11,
  //       order: 'high'
  //     }
  //   })
  // })
  // .then(res => res.json())
  // .then(json => console.log(json))


    // собрать данные с формы и передать (через Локал Сторейдж??)
    // сгенерировать случайное число от 1 до 4 для выбора фона игры (1-печенье, 2 - новый год ...)
    // редирект на экран игры
  // }


  return (<>
    { onClickRoute &&
      
        <Link href = { onClickRoute }>
        <ButtonStyle >
        { text }
        </ButtonStyle >
        </Link >}
{
  !onClickRoute &&
        <ButtonStyle type="submit" >
  {text}
</ButtonStyle >
    
    
    }
  </>)
}

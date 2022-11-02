// import Head from 'next/head'
// import Image from 'next/image'
// import { StartView } from '../components/view_start/view_start.jsx'
// import styles from '../styles/Home.module.css'
import { ThemeProvider } from '@emotion/react'

import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { BoardType, ItemType, GameModeType } from '../types/types'
import { MyBoard } from '../components/view_game/view_components/MyBoard'
import { MyLiDonut } from '../components/view_game/view_components/MyLiDonut'
import { MyModal } from '../components/view_game/view_components/MyModal'
import { GameView } from '../components/view_game/view_game'

const theme = {
  'background-color': {
    donat: '#DEC6AA',
    coin: '#3A1F36',
    newYear: '#132738',
    flower: '#2D3539'
  },
  'background-image': {
    // donat: '#DEC6AA',
    // coin: '#3A1F36',
    // newYear: '#132738',
    // flower: '#2D3539'
  },



}

const GameViewContainer = styled.div`
    background:  #DEC6AA;
    padding-top: 120px;
    width:980px;
    height:810px;
    color: white;
    position: relative;
`

export default function Home() {

  // входящие данные
  const router = useRouter();
  let { quantity, values, radio } = router.query;
  console.log(quantity, values, radio)




  // генерация игровых чисел в  gameValues

  function randomInteger(min: number, max: number) {     // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand) as number;
  }

  function generateGameValues(quantity: number, values: number) {
    const assotiatedValues = {
      1: [1, 33], //буквы
      2: [1, 9],
      3: [10, 19],
      4: [20, 50],
      5: [51, 99],
      6: [100, 999]
    }
    
    let gameValues: Array<number> = [];
    while (gameValues.length < quantity) {
      let i: number = randomInteger(assotiatedValues[values][0], assotiatedValues[values][1])
      if (!gameValues.includes(i)) {
        gameValues.push(i)
      }
    }
    return gameValues as Array<number>
  }

  // генерация победного варианта
  function generateWinSample(radio: string | Array<string>, gameValues: Array<number>) {
    if ((radio == 'high') ) {
      return [...gameValues].sort((a, b) => a - b) as Array<number>
    } else {
      return [...gameValues].sort((a, b) => b - a) as Array<number>
    }
  }

  // перевод цифр в буквы и наоборот
  const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
  function transferNumbersToLetters(gameValues: Array<number>) {
    return gameValues.map(i => alphabet[i - 1]) as Array<string>
  }
  function transferLettersToNumbers(gameValues: Array<string>) {
    return gameValues.map(i => (alphabet.indexOf(i) + 1)) as Array<number>
  }



  let gameValues: Array<any>
  let winSample: Array<any>

  if (+values !== 1) {
    gameValues = generateGameValues(+quantity, +values) as Array<number> 
    winSample = generateWinSample(radio, gameValues) as Array<number>
  } else {
    gameValues = transferNumbersToLetters(generateGameValues(+quantity, +values)) as   Array<string>;
    winSample = transferNumbersToLetters(generateWinSample(radio, transferLettersToNumbers(gameValues))) as Array<string> 
  }


 
return (
  <GameViewContainer>
    <GameView  gameValues={gameValues} winSample={winSample} radio={radio}/>
  </GameViewContainer>
)
}

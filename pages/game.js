// import Head from 'next/head'
// import Image from 'next/image'
// import { StartView } from '../components/view_start/view_start.jsx'
// import styles from '../styles/Home.module.css'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { GameView } from '../components/view_game/view_game'
import { useRouter } from '../node_modules/next/router'

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
export default function Home() {

  const router = useRouter();
  const { quantity, values, radio } = router.query;
 
  const assotiatedValues = {
    1: [1, 33], //буквы
    2: [1, 9],
    3: [10, 19], 
    4: [20, 50], 
    5: [51, 99], 
    6: [100, 999]
  } 

  let gameValues = [] // Array<string> 



  // генерация игровых чисел

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  while (gameValues.length < quantity) {
    let i = randomInteger(assotiatedValues[values][0], assotiatedValues[values][1])
    if (!gameValues.includes(i)) { 
      gameValues.push(i) 
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GameView gameValues={gameValues} gameMode={radio} />
    </ThemeProvider>

  )
}

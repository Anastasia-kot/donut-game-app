// import Head from 'next/head'
// import Image from 'next/image'
// import { StartView } from '../components/view_start/view_start.jsx'
// import styles from '../styles/Home.module.css'
import {ThemeProvider} from '@emotion/react'
import React from 'react'
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
export default function Home () {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GameView />
      </div>
    </ThemeProvider>

  )
}

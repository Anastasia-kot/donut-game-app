import React, { useState } from 'react'
import styled from '@emotion/styled'
import { BoardType, GameModeType, ItemType  } from  '../../types/types'
import { MyBoard } from './view_components/MyBoard'
import { MyLiDonut } from './view_components/MyLiDonut'
import { MyModal } from './view_components/MyModal'
import Image from 'next/image'
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'


const arrow = require('../../images/arrow.png')

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


const SpanStyled = styled.span`
 

position: absolute;
bottom: 20px;
font- family: 'Calibri';
font-style: normal;
font-weight:400;
font-size: 36px;
line-height: 44px;
` 
//@ts-ignore
export const GameView = ({ winSample, gameValues, radio }) => {

  

  // создание игровых данных  useState

  const [gameResult, setGameResult] = useState<boolean>(false);  // начальное состояние - партия не выйграна
  const [currentBoard, setCurrentBoard] = useState({} as BoardType)
  const [currentItem, setCurrentItem] = useState({} as ItemType)
  const [boards, setBoards] = useState<Array<BoardType>>(
    [
      {
        name: 'top',
        items: gameValues.map((v) => { return { id: gameValues.indexOf(v), content: v } } )
      },
      {
        name: 'bottom',
        items: gameValues.map((v) => { return { id: gameValues.indexOf(v) + gameValues.length , content: '' } } )
      },
    ]
  )

  function checkGameResult () {
    if (!gameResult){

      setGameResult(true);

      for (let i = 0; i < boards[1].items.length; i++) {
        if (boards[1].items[i].content !== winSample[i]) {
          setGameResult(false)
        }
      }
    }

  }



  // dnd функции

  const onDragStartHandler = (e, board, item) => {
    setCurrentBoard(board)
    setCurrentItem(item)
  }
  const onDragEndHandler = (e) => {
    // console.log(e,  )
  }
  const onDragOverHandler = (e) => {
    e.preventDefault()// над кем

  }
  const onDropHandler = (e, board, item) => {
    e.preventDefault()

    const currentIndex = currentBoard.items.indexOf(currentItem) // индекс (позиция) currentItem на currentBoard
    const dropIndex = board.items.indexOf(item) //  индекс (позиция) e.targetItem на  e.targetBoard

    if (currentBoard == board) {
      currentBoard.items.splice(currentIndex, 1, item)
      currentBoard.items.splice(dropIndex, 1, currentItem)
    } else {
      currentBoard.items.splice(currentIndex, 1, item)
      board.items.splice(dropIndex, 1, currentItem)
    }


    setBoards(boards.map(b => {
          if (b.name === board.name) { return board }
          if (b.name === currentBoard.name) { return currentBoard }
          return b
        }
      )
    )

    // определение результатов игры после каждого хода
    checkGameResult()

  }



  const opts = {
    enableTouchEvents:true,
    enableMouseEvents:true,
    touchSlop: '5px',

  }


  return (
    // <DndProvider backend={TouchBackend} options={opts}>
<>
      {boards.map(b =>
        <MyBoard
          key={boards.indexOf(b)}
          isTopBoard={b.name === 'top'}
        >
          {b.items.map(i => {
            return (
              <MyLiDonut
                key={i.id}
                onDragStart={(e) => onDragStartHandler(e, b, i)}
                onDragEnd={(e) => onDragEndHandler(e)}
                onDragOver={(e) => onDragOverHandler(e)}
                onDrop={(e) => onDropHandler(e, b, i)}
                i={i}
                gameResult={gameResult}

              />)
          })}



        </MyBoard>)}

      <div style={{ position: 'absolute', bottom: '260px', left: '55px' , width:'400px'}}>
        <SpanStyled >
          {radio === 'high' ? 'По возрастанию' : 'По убыванию'}
        </SpanStyled>
        <Image src={arrow} style={{ position: 'absolute', bottom: '0px' }} alt="arrow"/>
      </div>

      {gameResult &&
        <MyModal
          header='Победа!'
          content='Молодец! Ты успешно справился с заданием!'

          buttonText='Заново'
          onClickRoute='/'

        />
      }

      </>
      // </DndProvider>
  )
}

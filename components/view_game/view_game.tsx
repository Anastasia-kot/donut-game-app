import React, { useState } from 'react'
import styled from '@emotion/styled'
import { BoardType, GameModeType, ItemType  } from  '../../types/types'
import { MyBoard } from './view_components/MyBoard'
import { MyLiDonut } from './view_components/MyLiDonut'
import { MyModal } from './view_components/MyModal'

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

//@ts-ignore
export const GameView = ({winSample,gameValues}) => {

  

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
    // console.log(e, board, card)
    setCurrentBoard(board)
    setCurrentItem(item)

  }
  const onDragEndHandler = (e) => {
    // console.log(e,  )
    e.target.style.background = 'blue'  // откуда взяли


  }
  const onDragOverHandler = (e) => {
    e.preventDefault()
    e.target.style.background = 'red' // над кем

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






  return (
    
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

      {gameResult &&
        <MyModal
          header='Победа!'
          content='Молодец! Ты успешно справился с заданием!'

          buttonText='Заново'
          onClickRoute='/'

        />
      }

</>
  )
}

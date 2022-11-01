import React, { useState } from 'react'
import styled from '@emotion/styled'
import { BoardType, ItemType  } from  '../../types/types'
import { MyBoard } from './view_components/MyBoard'
import { MyLiDonut } from './view_components/MyLiDonut'
import { MyModal } from './view_components/MyModal'



const GameViewContainer = styled.div`
    background:  #DEC6AA;
    padding-top: 120px;
    width:980px;
    height:810px;
    color: white;
`
 
export const GameView = ({ gameValues, gameMode }) => {

  const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
  // if (+values === 1) { i = alphabet[i - 1] }

  const winSampleOfBoard = (gameMode === 'high') ? [...gameValues].sort((a, b) => a - b ) : [...gameValues].sort((a, b) => b - a)
  console.log('winSampleOfBoard', [...winSampleOfBoard])
  const [gameResult, setGameResult] = useState<boolean>(false);  // начальное состояние - партия не выйграна


  const [boards, setBoards] = React.useState(
    [
      {name: 'top',  
        items:
          gameValues.map((v) => { return ({ id: gameValues.indexOf(v), content: v }) })
      },
      { name: 'bottom',
        items:
          gameValues.map((v) => { return ({ id: gameValues.indexOf(v) + gameValues.length, content: '' }) })
      }
    ] as Array<BoardType>
  )
  const [currentBoard, setCurrentBoard] = React.useState({} as BoardType)
  const [currentItem, setCurrentItem] = React.useState({}  as ItemType)
 



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
    e.target.style.background='red' // над кем

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
   

    setBoards( boards.map( b => {
          if (b.name === board.name) {return board}
          if (b.name === currentBoard.name) {return currentBoard}
          return b
        }
      )
    )

    // определение результатов игры после каждого хода
    setGameResult(true);
    for (let i = 0; i < boards[1].items.length; i++) {
      if (( boards[1].items[i].content !== winSampleOfBoard[i]) && (gameResult !== true)){
        setGameResult(false)
      }
    }
    if (gameResult === true) {
      console.log('win')  

    }
 
  }


  const onDragOverHandlerBoard = (e) => {
    e.preventDefault()
  }
  const onDropHandlerBoard = (e, board) => { 
    
    e.preventDefault()
    // e.target.style.background = 'green' // куда поставили

    // board.items.push(currentItem)
    // const currentIndex = currentBoard.items.indexOf(currentItem)

    // currentBoard.items.splice(currentIndex, 1)

 
    // setBoards( boards.map( b => {
    //       if (b.name === board.name) {return board}
    //       if (b.name === currentBoard.name) {return currentBoard}
    //       return b
    //     }
    //   )
    // )
    e.target.style.background = 'none' // куда поставили


  }


  return (
    
    <GameViewContainer>
      {boards.map(b=>
        <MyBoard 
          key={boards.indexOf(b)}
          isTopBoard={ b.name ==='top'} 
        >
        {b.items.map(i => {
          return (
            <MyLiDonut
              // className={ css`cursor: ${i.content ? 'grab' : 'arrow'} `}
              // draggable={!!i.content}
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
      
  
    </GameViewContainer>
  )
}

import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'
import { BoardType, ItemType  } from  '../../types/types'
import { MyBoard } from './view_components/MyBoard'
import { MyLiDonut } from './view_components/MyLiDonut'



const GameViewContainer = styled.div`
    background:  #DEC6AA;
    padding-top: 120px;
    width:980px;
    height:810px;
    color: white;
`
 
export const GameView = () => {
  const [boards, setBoards] = React.useState(
    [
      {name: 'top',  
        items:
          [
            { id: 1, content: '1' },
            { id: 2, content: '2' },
            { id: 3, content: '3' },
            { id: 4, content: '4' },
            { id: 5, content: '5' }
          ]
      },
      { name: 'bottom',
        items:
          [
            { id: 6, content: '' },
            { id: 7, content: '' },
            { id: 8, content: '' },
            { id: 9, content: '' },
            { id: 10, content: '' }

          ]
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

            />)
        })}
        
        
        
      </MyBoard>)}
      
  
    </GameViewContainer>
  )
}

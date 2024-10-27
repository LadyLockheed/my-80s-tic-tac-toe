import { useEffect, useState } from 'react'
import { Board, Background } from '../Components'
import './tictactoe.css'


const TicTacToe = () => {
  
  const [winner, setWinner] = useState<string | null>('')
  const [currentPlayer, setCurrentPlayer] = useState<string>('X')
  const [squareValues, setSquareValues] = useState<string[]>(Array(9).fill(''))
console.log(winner)


  
  useEffect(()=> {
    const calculateWinner = ()=> {

      const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
  
      for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squareValues[a] && squareValues[a] === squareValues[b] && squareValues[a] === squareValues[c]) {
          return setWinner(squareValues[a]);
        }
      }
        
      return setWinner(null);
      
    }

    calculateWinner()

  },[squareValues])


  const statusText = ()=> {
    if (winner) 
      return (
        <h1 className='winner-text'>Winner is: <span>{winner}</span></h1>
      )
      if (!winner) {
        return (
          <h1 className='current-player-text'>You´re up player <span>{currentPlayer}</span></h1>
        )
      }
  }

  const resetGame = ()=> {
    setSquareValues(Array(9).fill(''))
    setCurrentPlayer('X')
  }

  return (

    <div className='tictactoe-content-wrapper'>

    <Background/>

      <div className='sliding-text'>
        <h1 className='ticTacToe-headline'>Tic-Tac-Toe</h1>
      </div>

      <Board 
        squareValues={squareValues} 
        setSquareValues={setSquareValues}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}/>
  
      {statusText()}
    
      <button className='reset-button' onClick={()=> resetGame()}>Reset game</button>

    </div>

  )
}
export default TicTacToe
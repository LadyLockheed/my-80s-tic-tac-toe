import { useState } from 'react'
import { Board } from '../Components'
import './tictactoe.css'


const TicTacToe = () => {
  
  const [winner, setWinner] = useState<string>('')
  const [currentPlayer, setCurrentPlayer] = useState<string>('X')
  const [squareValues, setSquareValues] = useState<string[]>(Array(9).fill(''))
  console.log(squareValues)

  const statusText = ()=> {
    if (winner) 
      return (
        <h1 className='winner-text'>Winner is: {winner}</h1>
      )
      if (!winner) {
        return (
          <h1 className='current-player-text'>{`You´re up player ${currentPlayer}`}</h1>
        )
      }
  }

  const resetGame = ()=> {
    setSquareValues(Array(9).fill(''))
  }

  return (

    <div className='centered-container'>

      <div className='sliding-text'>
        <h1 className='ticTacToe-headline'>Tic-Tac-Toe</h1>
      </div>

      <Board squareValues={squareValues} setSquareValues={setSquareValues}/>
  
      {statusText()}

      <button className='reset-button' onClick={()=> resetGame()}>Reset game</button>

    </div>

  )
}
export default TicTacToe
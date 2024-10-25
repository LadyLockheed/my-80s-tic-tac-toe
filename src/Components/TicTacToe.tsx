import { useState } from 'react'
import { Board } from '../Components'


const TicTacToe = () => {
  
  const [winner, setWinner] = useState<string>('')
  const [currentPlayer, setCurrentPlayer] = useState<string>('X')

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

  return (

    <div className='centered-container'>

      <div className='sliding-text'>
        <h1 className='ticTacToe-headline'>Tic-Tac-Toe</h1>
      </div>

      <Board/>
  
      {statusText()}

    </div>

  )
}
export default TicTacToe
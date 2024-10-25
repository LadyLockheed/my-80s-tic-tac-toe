import { Board } from "./Components"
import './App.css'
import { useState } from "react"

function App() {
  
  const [winner, setWinner] = useState<string>('')
  const [currentPlayer, setCurrentPlayer] =useState<string>('X')

  const text = ()=> {
    if (winner) 
      return (
        <h1>Winner is: {winner}</h1>
      )
      if (!winner) {
        return (
          <h1>You´re up player {currentPlayer}</h1>
        )
      }
  }

  return (



    <div className='centered-container'>
      <div className='sliding-text'>
        <h1 className='ticTacToe-headline'>Tic-Tac-Toe</h1>
      </div>

      <Board/>
  
    {text()}
    
  

    </div>

  )
}

export default App

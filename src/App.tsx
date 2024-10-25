import { Board } from "./Components"
import './App.css'

function App() {


  return (

    <div className='centered-container'>
      <div className='sliding-text'>
        <h1 className='ticTacToe-headline'>Tic-Tac-Toe</h1>
      </div>

      <Board/>
  

      <h1>Winner is: some winner</h1>
  

    </div>

  )
}

export default App

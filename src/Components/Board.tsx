import { useState } from 'react'
import './board.css'

const Board = () => {

  const [squareValues, setSquareValues] = useState<string[]>(Array(9).fill(''))
  const [currentPlayer, setCurrentPlayer] = useState<string>('X')
  const isBoardFilled = !squareValues.includes('')
console.log(squareValues)
  const handleTurns = (squareIndex: number)=> {

      if(!squareValues.includes('')) {
        console.log('alla fält är fyllda')
      }
    setSquareValues(prevValues => [...prevValues.slice(0, squareIndex), currentPlayer, ...prevValues.slice(squareIndex+1)])
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    

  }

  const Square = (index:number) => {

    const isSquareFilled = squareValues[index] !==''

    return (
      <button 
      className={squareValues[index] !=='' ? ' square squareFilled' : 'square'}
      onClick={()=>handleTurns(index)}
      disabled={isBoardFilled || isSquareFilled}
      >
        {squareValues[index]}
      </button>
    )
  }



  return (
    <div className='board'>

      <div className="squares-row">
      {Square(0)}
      {Square(1)}
      {Square(2)}
      </div>

      <div className="squares-row">
      {Square(3)}
      {Square(4)}
      {Square(5)}
      </div>

      <div className="squares-row">
        {Square(6)}
        {Square(7)}
        {Square(8)}
      </div>


    </div>
  )
}
export default Board
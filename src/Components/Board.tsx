import { ReactNode } from 'react';
import './board.css'
import { type CurrentPlayer } from './TicTacToe';

type BoardProps ={
  squareValues: (CurrentPlayer | '')[];
  setSquareValues: React.Dispatch<React.SetStateAction<(CurrentPlayer | '')[]>>;
  currentPlayer: CurrentPlayer;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<CurrentPlayer>>;
}

const Board = (props: BoardProps) => {

  const {squareValues, setSquareValues, currentPlayer, setCurrentPlayer} = props;

  const isBoardFilled = !squareValues.includes('')

  const handleTurns = (squareIndex: number)=> {

    setSquareValues(prevValues => [...prevValues.slice(0, squareIndex), currentPlayer, ...prevValues.slice(squareIndex+1)])
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')

  }

//TODO Move square to own file?
  const Square = (index:number):ReactNode => {

    const isSquareFilled = squareValues[index] !==''

    return (
      <button 
        className={squareValues[index] !=='' ? 'square squareFilled' : `square ${currentPlayer}`}
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
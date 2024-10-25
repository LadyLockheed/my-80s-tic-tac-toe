import './board.css'

const Board = () => {
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
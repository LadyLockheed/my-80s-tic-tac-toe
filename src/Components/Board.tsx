import './board.css'

const Board = () => {
  return (
    <div className='board'>

      <div className="squares-row">
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
      </div>

      <div className="squares-row">
        <div className='square'>4</div>
        <div className='square'>5</div>
        <div className='square'>6</div>
      </div>

      <div className="squares-row">
        <div className='square'>7</div>
        <div className='square'>8</div>
        <div className='square'>9</div>
      </div>

    </div>
  )
}
export default Board
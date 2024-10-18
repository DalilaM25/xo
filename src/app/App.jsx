import './App.css'
import { useState } from 'react';
import checkWinner from '../utils/utils';

const SYMBOL_X = 'X';
const SYMBOL_O = 'O';
const startCells = Array(9).fill(null);

function App() {
  const [cells, setСells] = useState(startCells);
  const [currentStep, setcurrentStep] = useState(SYMBOL_O);
  const [winner, setWinner] = useState(); 

  const getSymbolClassName = (symbol) => {
    if(symbol === SYMBOL_O) return 'symbol--o';
    if(symbol === SYMBOL_X) return 'symbol--x';
    return '';
  } 

  const handleClick = (index) => {
    if (cells[index] || winner) {return}
    const cellsCopy = cells.slice();
    cellsCopy[index]=currentStep;
    const win = checkWinner(cellsCopy);
    
    setСells(cellsCopy);
    setcurrentStep( currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinner(win);
  }
  const handleReset = () => {
    setСells(startCells);
    setWinner(undefined);
  }
  
const renderSymbol = (symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
const winnerSymbol = winner ? cells[winner[0]] : undefined;
const isDraw = !winner && cells.every(cell => cell !== null);
console.log("Winner:", winner);
console.log("Is Draw:", isDraw);

  return (
    <div className="game">
      <div className="game-info">
       {isDraw ? 'Ничья 🤝' : winner ? '🏆 Победил:' : 'Ход:' } 
       {!isDraw && renderSymbol(winnerSymbol ?? currentStep)}
      </div>
      <div className="game-field">
        {cells.map((symbol, index) => {
          const isWinner = winner?.includes(index)
          return <button key={index} className={`cell ${isWinner ? 'cell--win' : ''}`} onClick={()=>handleClick(index)} >{symbol ? renderSymbol(symbol) : null}</button>
        })}
      </div>
      <button className='reset' onClick={handleReset} >Начать сначала</button>
    </div>
  )
}

export default App;

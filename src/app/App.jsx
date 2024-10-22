import styles from './App.module.css'
import { useState } from 'react';
import { checkWinner, SYMBOL_O, SYMBOL_X } from '../utils/utils';
import { GameInfo } from '../game-info/GameInfo';
import { GameCell } from '../gameCell/GameCell';

const startCells = Array(9).fill(null);

function App() {
  const [cells, setСells] = useState(startCells);
  const [currentStep, setcurrentStep] = useState(SYMBOL_O);
  const [winner, setWinner] = useState(); 

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
  
const winnerSymbol = winner ? cells[winner[0]] : undefined;
const isDraw = !winner && !cells.includes(null);

  return (
    <div className={styles.game}>
      <GameInfo 
      isDraw={isDraw} 
      winner={winner} 
      winnerSymbol={winnerSymbol} 
      currentStep={currentStep}
      />
      <div className={styles.field}>
        {cells.map((symbol, index) => {
          return(
          <GameCell 
          key={index} 
          onClick={()=>handleClick(index)} 
          isWinner={winner?.includes(index)} 
          symbol={symbol}
          />)
        })}
      </div>
      <button 
      className={styles.reset} 
      onClick={handleReset} >Начать сначала</button>
    </div>
  )
}

export default App;

import { GameSymbol } from '../gameSymbol/GameSymbol'

import styles from './GameInfo.module.css'

export const GameInfo = ({isDraw, winner, winnerSymbol, currentStep}) => {
    if (isDraw) {
        return(
            <div className={styles.info}>Ничья 🤝</div>  
        )
    }
    if (winner) {
        return(
            <div className={styles.info}>🏆 Победил:
            <GameSymbol symbol={winnerSymbol}/>
            </div>  
        )
    }
    if (isDraw) {
        return(
            <div className={styles.info}>Ничья 🤝</div>  
        )
    }

    return (
        <div className={styles.info}>Ход:
       <GameSymbol symbol={currentStep}/>
      </div>
    )
}
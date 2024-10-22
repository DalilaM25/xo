import { GameSymbol } from "../gameSymbol/GameSymbol"
import "./GameCell.css"
export const GameCell = ({onClick, isWinner, symbol}) => {
    return (
    <button className={`cell ${isWinner ? 'cell--win' : ''}`} onClick={onClick} >{symbol ? <GameSymbol symbol={symbol}/> : null}</button>)
}
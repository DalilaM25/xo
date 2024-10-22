import { SYMBOL_O, SYMBOL_X} from '../utils/utils'
import "./GameSymbol.css"

const getSymbolClassName = (symbol) => {
  if (symbol === SYMBOL_O) return "symbol--o";
  if (symbol === SYMBOL_X) return "symbol--x";
  return "";
};
export const GameSymbol = ({symbol}) => {
    return (
<span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
    )
}
import React, {Dispatch, SetStateAction} from 'react';
import {Player} from "../../types/Player.ts";
import {Game} from "../../types/Game.ts";

interface CounterProps {
  player: Player;
  game: Game;
  updatePoints: (playerId: number, points: number) => void;
}

const Counter: React.FC<CounterProps> = ({player, game, updatePoints}) => {
  const [count, setCount] = React.useState(game.points[player.id]);
  const [isActive, setIsActive] = React.useState(false);

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
    updatePoints(player.id, newCount);
  };

  return (
    <div className="counter is-boxed">
      <h2 className="title is-3">{player.name}</h2>
      <div className="field has-addons">
        <div className="control">
          <button className="button is-medium" onClick={() => handleCountChange(count - 1)}>-</button>
        </div>
        <div className="control is-flex-grow-1">
          <button className="button is-medium is-boxed"
                  onClick={() => setIsActive(isActive => !isActive)}>{count}</button>
        </div>
        <div className="control">
          <button className="button is-medium" onClick={() => handleCountChange(count + 1)}>+</button>
        </div>
      </div>
      <AdvancedCounter setCount={handleCountChange} prevCount={count} isActive={isActive} setIsActive={setIsActive}/>
    </div>
  );
}

interface AdvancedCounterProps {
  setCount: (newCount: number) => void;
  prevCount: number;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const AdvancedCounter: React.FC<AdvancedCounterProps> = ({setCount, prevCount, isActive, setIsActive}) => {
  const [operation, setOperation] = React.useState<string>('+');
  const [amount, setAmount] = React.useState<number>(0);

  const calculateCount = (operation: string, amount: number) => {
    let newCount: number;
    switch (operation) {
      case '+':
        newCount = prevCount + amount;
        break;
      case '-':
        newCount = prevCount - amount;
        break;
      case '=':
        newCount = amount;
        break;
      default:
        newCount = prevCount;
    }
    setCount(newCount);
    setIsActive(false);
  }

  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content is-boxed is-vgrouped">
        <div className="field has-addons">
          <div className={`control ${operation === '+' ? 'is-active' : ''}`}>
            <button className="button is-medium" onClick={() => setOperation('+')}>+</button>
          </div>
          <div className={`control ${operation === '-' ? 'is-active' : ''}`}>
            <button className="button is-medium" onClick={() => setOperation('-')}>-</button>
          </div>
          <div className={`control ${operation === '=' ? 'is-active' : ''}`}>
            <button className="button is-medium" onClick={() => setOperation('=')}>=</button>
          </div>
        </div>
        <div className="field has-addons">
          <div className="control">
            <input className="input is-medium" type="number" placeholder="Amount" value={amount === 0 ? '' : amount}
                   onChange={e => setAmount(Number(e.target.value))}/>
          </div>
          <div className="control">
            <button className="button is-medium is-primary" onClick={() => calculateCount(operation, amount)}>Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
import React, { useState } from 'react';
import {Player} from "../../types/Player.ts";

interface AddPlayerProps {
  setPlayers: (players: (prevState: Player[]) => Player[]) => void;
}

const AddPlayer: React.FC<AddPlayerProps> = ({ setPlayers }) => {
  const [playerName, setPlayerName] = useState('');

  const handleAddPlayer = () => {
    if (playerName) {
      setPlayers(prevState => [...prevState, { id: prevState.length + 1, name: playerName, games: [] }]);
      setPlayerName('');
    }
  };

  return (
    <div className="field has-addons is-flex-grow-1">
      <div className="control is-expanded">
        <input
          type="text"
          placeholder="Player name"
          className="input"
          value={playerName}
          onChange={e => setPlayerName(e.target.value)}
        />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleAddPlayer}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddPlayer;
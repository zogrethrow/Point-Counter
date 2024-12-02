import React from 'react';
import {Player} from "../../types/Player.ts";

interface PlayerListProps {
  players: Player[];
  setPlayers: (players: (prevState: Player[]) => Player[]) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, setPlayers }) => {
  return (
    <ul className="is-list">
      {players.map((player, index) => (
        <li key={index} className="is-item is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center mb-3">
          <span className="subtitle mb-0">{player.name}</span>
          <div className="field">
            <div className="control">
              <button className="button is-small is-danger is-outlined" onClick={() => {
                setPlayers(prevState => prevState.filter((_, i) => i !== index));
              }}>
                <span className="icon is-small">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
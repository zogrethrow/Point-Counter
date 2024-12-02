import { Player } from '../types/Player';
import { Game } from "../types/Game.ts";

const CreateGame = (players: Player[], type: string): Game => {
  const date = new Date().toISOString();
  const points = players.reduce((acc, player) => {
    acc[player.id] = 0;
    return acc;
  }, {} as { [playerId: number]: number });

  return {
    id: Math.floor(Math.random() * 1000),
    type: type,
    date: date,
    players: players,
    points: points,
    winner: null,
  };
}

export default CreateGame;
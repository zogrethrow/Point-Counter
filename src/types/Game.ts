import { Player } from './Player';

export type Game = {
  id: number;
  type: string;
  date: string;
  players: Player[];
  points: { [playerId: number]: number };
  winner: Player | null;
}
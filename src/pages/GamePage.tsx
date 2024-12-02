import React from 'react';
import Counter from '../components/counter/Counter';
import {Game} from "../types/Game.ts";
import Layout from "../components/layout/Layout.tsx";

interface Props {
  game: Game | null;
  changePage: (page: string) => void;
}

const GamePage: React.FC<Props> = ({game, changePage}) => {
  if (!game) {
    changePage('createGamePage');
    return null;
  }

  const updatePoints = (playerId: number, points: number) => {
    game.points[playerId] = points;
  };

  return (
    <Layout changePage={changePage} title={game.type}>
      <div
        className="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center is-gap-4">
        {game.players.map((player, index) => {
          return (
            <Counter key={index} player={player} game={game} updatePoints={updatePoints}/>
          );
        })}
      </div>
    </Layout>
  );
}

export default GamePage;
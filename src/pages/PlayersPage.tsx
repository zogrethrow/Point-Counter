import React from 'react';
import { Player } from '../types/Player';
import Layout from '../components/layout/Layout.tsx';
import PlayerList from '../components/player/PlayerList.tsx';
import AddPlayer from '../components/player/AddPlayer.tsx';

interface Props {
  players: Player[];
  setPlayers: (players: (prevState: Player[]) => Player[]) => void;
  changePage: (page: string) => void;
}

const PlayersPage: React.FC<Props> = ({ players, setPlayers, changePage }) => {
  return (
    <Layout changePage={changePage} title="Players">
      <div className="form is-flex-grow-1 is-flex is-flex-direction-column is-gap-2">
        <PlayerList players={players} setPlayers={setPlayers} />
      </div>
      <div className="is-flex is-flex-direction-row is-justify-content-space-between">
        <AddPlayer setPlayers={setPlayers} />
      </div>
    </Layout>
  );
};

export default PlayersPage;
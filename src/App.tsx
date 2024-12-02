import { useEffect, useState } from 'react';
import './styles/App.css';
import FrontPage from './pages/FrontPage.tsx';
import GamePage from './pages/GamePage.tsx';
import PlayersPage from './pages/PlayersPage.tsx';
import StatisticsPage from './pages/StatisticsPage.tsx';
import SettingsPage from './pages/SettingsPage.tsx';
import CreateGamePage from './pages/CreateGamePage.tsx';
import { Game } from './types/Game.ts';
import { Player } from './types/Player.ts';
import { Theme } from './types/Theme.ts';
import UseTheme from './hooks/UseTheme.ts';

function App() {
  const [activePage, setActivePage] = useState('frontPage');
  const [games, setGames] = useState<Game[]>([]);
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [players, setPlayers] = useState<Player[]>([{ id: 1, name: 'Tobias', games: [] }]);
  const changeActivePage = (page: string) => {
    setActivePage(page);
  };

  const { setTheme } = UseTheme();

  useEffect(() => {
    // Initialize theme when the app is loaded
    setTheme(localStorage.getItem('bulma-theme') as Theme || 'system');
  }, [setTheme]);

  return (
    <>
      {activePage === 'frontPage' && <FrontPage changePage={changeActivePage} currentGame={currentGame} />}
      {activePage === 'gamePage' && <GamePage game={currentGame} changePage={changeActivePage} />}
      {activePage === 'createGamePage' && <CreateGamePage changePage={changeActivePage} setGames={setGames} setCurrentGame={setCurrentGame} players={players} setPlayers={setPlayers} />}
      {activePage === 'playersPage' && <PlayersPage players={players} setPlayers={setPlayers} changePage={setActivePage} />}
      {activePage === 'statisticsPage' && <StatisticsPage changePage={setActivePage} games={games} />}
      {activePage === 'settingsPage' && <SettingsPage changePage={setActivePage} />}
    </>
  );
}

export default App;
import React from 'react';
import 'bulma/css/bulma.css';
import {Game} from "../types/Game.ts";

interface Props {
  changePage: (page: string) => void;
  currentGame: Game | null;
}

const FrontPage: React.FC<Props> = ({changePage, currentGame}) => {
  return (
    <div
      className="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center is-gap-4">
      <h1 className="title is-boxed has-text-centered m-0">Point Counter</h1>
      {!currentGame || <button className="button is-primary is-medium is-boxed" onClick={() => {changePage("gamePage")}}>Continue Game</button>}
      <button className={`button is-medium ${!currentGame ? 'is-primary' : ''} is-boxed`} onClick={() => changePage("createGamePage")}>New Game</button>
      <button className="button is-medium is-boxed" onClick={() => changePage('playersPage')}>Players</button>
      <button className="button is-medium is-boxed" onClick={() => changePage('statisticsPage')}>Statistics</button>
      <button className="button is-medium is-boxed" onClick={() => changePage('settingsPage')}>Settings</button>
    </div>
  );
};

export default FrontPage;
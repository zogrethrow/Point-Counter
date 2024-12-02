import {Game} from "../types/Game.ts";
import React, {useState} from "react";
import CreateGame from "../hooks/CreateGame.tsx";
import {Player} from "../types/Player.ts";
import Modal from "../components/modal/Modal.tsx";
import Layout from "../components/layout/Layout.tsx";
import AddPlayer from "../components/player/AddPlayer.tsx";

interface Props {
  changePage: (page: string) => void;
  setGames: (games: (prevState: Game[]) => Game[]) => void;
  setCurrentGame: (game: Game) => void;
  players: Player[];
  setPlayers: (players: (prevState: Player[]) => Player[]) => void;
}

const CreateGamePage: React.FC<Props> = ({changePage, setGames, setCurrentGame, players, setPlayers}) => {
  const [currentGamePlayers, setCurrentGamePlayers] = useState<Player[]>([]);
  const [currentGameType, setCurrentGameType] = useState<string>("");

  const [modalActive, setModalActive] = useState<boolean>(false);

  const setGameType = (type: string) => {
    setCurrentGameType(type);
  };

  const createGame = () => {
    if (currentGamePlayers.length < 2) {
      return;
    }
    const game = CreateGame(currentGamePlayers, currentGameType);
    setGames(prevState => {
      return [...prevState, game];
    });
    currentGamePlayers.forEach(player => player.games.push(game.id));
    setCurrentGame(game);
    changePage("gamePage");
  }

  return (
    <Layout changePage={changePage} title="Create Game">
      <div className={`form is-flex-grow-1 is-flex is-flex-direction-column is-gap-2`}>
        <div className={`field`}>
          <h2 className={`subtitle`}>Players</h2>
          <div className={`control`}>
            <ul>
              {currentGamePlayers.map((player: Player, index) => {
                return (
                  <li key={index}
                      className={"is-item is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center mb-3"}>
                    <span className={`subtitle mb-0`}>{player.name}</span>
                    <div className={`field`}>
                      <div className={`control`}>
                        <button className={"button is-small is-danger is-outlined"} onClick={() => {
                          setCurrentGamePlayers(prevState => {
                            return prevState.filter((_, i) => i !== index);
                          });
                        }}>
                      <span className="icon is-small">
                        <i className="fas fa-times"></i>
                      </span>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={`field`}>
          <div className={`control is-expanded`}>
            <div className={`select is-fullwidth`}>
              <select className={``} onChange={(e) => setGameType(e.target.value)}>
                <option value="default">Default</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={`is-flex is-flex-direction-row is-justify-content-space-between`}>
        <button className="button" onClick={() => setModalActive(prev => !prev)}>Add Player</button>
        <button className="button" disabled={currentGamePlayers.length < 2} onClick={() => {
          createGame()
        }}>Create Game
        </button>
      </div>
      <Modal title="Add Players" isActive={modalActive} closeModal={() => setModalActive(false)} footer={<AddPlayer setPlayers={setPlayers} />}>
        <ul>
          {players.map((player, index) => {
            if (!currentGamePlayers.includes(player)) {
              return (
                <li key={index}
                    className={"is-item is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center mb-3"}>
                  <span className={`subtitle mb-0`}>{player.name}</span>
                  <div className={`field`}>
                    <div className={`control`}>
                      <button className={"button is-small is-success is-outlined"} onClick={() => {
                        setCurrentGamePlayers(prevState => {
                          return [...prevState, player];
                        });
                      }}>
                      <span className="icon is-small">
                        <i className="fas fa-times"></i>
                      </span>
                      </button>
                    </div>
                  </div>
                </li>
              )
            }
            return null;
          })}
        </ul>
      </Modal>
    </Layout>
  );
};

export default CreateGamePage;
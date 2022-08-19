import React, { createContext, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import FormDraw from "./components/Forms/FormDraw";
import FormNames from "./components/Forms/FormNames";
import FormWinner from "./components/Forms/FormWinner";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Scoreboard from "./components/Scoreboard";
import { ICurrentMove, IGame, IMoveContext } from "./types/interfaces";

export const MoveContext = createContext<IMoveContext | null>(null);

function App() {
  // параметры игры: размер поля и игроки
  // const initialGame: Game = { boardSize: 3, players: [{ name: "" }, { name: "" }] };
  const initialGame: IGame = { boardSize: 10, players: [{ name: "Первый игрок" }, { name: "Второй" }] };
  const [game, setGame] = useState<IGame>(initialGame);

  // функция для создания новой игры
  const createGame = (player1: string, player2: string, boardSize: number) => {
    setGame({ boardSize, players: [{ name: player1 }, { name: player2 }] });
  };
  const needCreateGame = !game.players[0].name || !game.players[1].name;

  // состояние текущего хода, передаётся в таблицу очков и в игровое поле
  const [currentMove, setCurrentMove] = useState<ICurrentMove>({ player: 0, move: 1 });
  // количество очков у игроков
  const [scores, setScores] = useState<number[]>([0, 0]);

  // объявление победителя
  const [winner, setWinner] = useState<number | null>(null);
  const celebrateWin = () => {
    setWinner(currentMove.player);
    setScores((prev) =>
      prev.map((playerScore, i) => (i === currentMove.player ? ++playerScore : playerScore))
    );
  };

  // объявление ничьей
  const [draw, setDraw] = useState<boolean>(false);

  return (
    <>
      <Header />

      {needCreateGame ? (
        <Modal>
          <FormNames callback={createGame} />
        </Modal>
      ) : (
        <main className="main">
          <MoveContext.Provider value={{ current: currentMove, setCurrentMove }}>
            <Scoreboard players={game.players} scores={scores} />
            <Board size={game.boardSize} winCallback={celebrateWin} drawCallback={() => setDraw(true)} />
          </MoveContext.Provider>

          {winner !== null && (
            <Modal>
              <FormWinner playerName={game.players[winner].name} closeCallback={() => setWinner(null)} />
            </Modal>
          )}
          {draw && (
            <Modal>
              <FormDraw closeCallback={() => setDraw(false)} />
            </Modal>
          )}
        </main>
      )}
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import FormNames from "./components/Forms/FormNames";
import FormWinner from "./components/Forms/FormWinner";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Scoreboard from "./components/Scoreboard";
import { IGame } from "./types/interfaces";

function App() {
  // параметры игры: размер поля и игроки
  // const initialGame: Game = { boardSize: 3, players: [{ name: "" }, { name: "" }] };
  const initialGame: IGame = { boardSize: 3, players: [{ name: "Первый игрок" }, { name: "Второй" }] };
  const [game, setGame] = useState<IGame>(initialGame);

  // функция для создания новой игры
  const createGame = (player1: string, player2: string, boardSize: number) => {
    setGame({ boardSize, players: [{ name: player1 }, { name: player2 }] });
  };
  const needCreateGame = !game.players[0].name || !game.players[1].name;

  // объявление победителя
  const [winner, setWinner] = useState<number | null>(null);
  const celebrateWin = () => {
    setWinner(1);
  }

  return (
    <>
      <Header />

      {needCreateGame ? (
        <Modal>
          <FormNames callback={createGame} />
        </Modal>
      ) : (
        <main className="main">
          <Scoreboard players={game.players} />
          <Board size={game.boardSize} winCallback={celebrateWin}/>

          {winner && <Modal><FormWinner playerName={game.players[winner].name} /></Modal>}
        </main>
      )}
    </>
  );
}

export default App;

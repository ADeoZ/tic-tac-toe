import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import FormNames from "./components/Forms/FormNames";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Scoreboard from "./components/Scoreboard";
import { IGame } from "./types/interfaces";

function App() {
  // const initialGame: Game = { boardSize: 3, players: [{ name: "" }, { name: "" }] };
  const initialGame: IGame = { boardSize: 3, players: [{ name: "Первый игрок" }, { name: "Второй" }] };
  const [game, setGame] = useState<IGame>(initialGame);

  const createGame = (player1: string, player2: string, boardSize: number) => {
    setGame({ boardSize, players: [{ name: player1 }, { name: player2 }] });
  };
  const needCreateGame = !game.players[0].name || !game.players[1].name;

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
          <Board size={game.boardSize} />
        </main>
      )}
    </>
  );
}

export default App;

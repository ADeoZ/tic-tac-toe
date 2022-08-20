import React, { useEffect, useState } from "react";
import { IPlayer, IRatingPlayer } from "../../types/interfaces";
import "./Rating.css";
import RatingPlayer from "./RatingPlayer";

interface RatingProps {
  currentPlayers: IPlayer[];
  currentScores: number;
}

export default function Rating({ currentPlayers, currentScores }: RatingProps) {
  // переключатель таблицы
  const [toggle, setToggle] = useState(false);
  const ToggleClass = "rating__toggle" + (toggle ? " rating__toggle_active" : "");

  // таблица рейтинга
  const [table, setTable] = useState<IRatingPlayer[]>([]);

  // получаем таблицу из localStorage
  useEffect(() => {
    const localTable: IRatingPlayer[] = JSON.parse(localStorage.getItem("rating") || "[]");
    setTable(localTable.sort((a, b) => b.score - a.score).slice(0, 10));
  }, [currentScores]);

  return (
    <div className="rating">
      <div className={ToggleClass} onClick={() => setToggle(!toggle)}>
        Рейтинг героев
      </div>
      {toggle && (
        <div className="rating__table">
          {table.length > 0
            ? table.map((place, k) => (
                <RatingPlayer
                  player={place.player}
                  score={place.score}
                  active={currentPlayers[0].name === place.player || currentPlayers[1].name === place.player}
                  key={k}
                />
              ))
            : "Героев пока нет"}
        </div>
      )}
    </div>
  );
}

import { IRatingPlayer } from "../types/interfaces";

export const saveToRating = (name: string): void => {
  const rating: IRatingPlayer[] = JSON.parse(localStorage.getItem("rating") || "[]");
  const playerIndex = rating.findIndex((index) => index.player === name);
  playerIndex !== -1 ? rating[playerIndex].score++ : rating.push({ player: name, score: 1 });
  localStorage.setItem("rating", JSON.stringify(rating));
};

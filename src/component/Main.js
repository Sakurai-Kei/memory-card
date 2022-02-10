/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
import cardModule from "../cardData/cardData";

function Main() {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);

  function isDuplicate(modal) {
    const result = chosenCards.filter(
      (card) => card === modal.nativeEvent.path[1].id
    );
    return result;
  }

  function chooseCard(modal) {
    setChosenCards(chosenCards.concat([modal.nativeEvent.path[1].id]));
  }

  function updateScore() {
    // placeholder
  }

  useEffect(() => {
    console.log(chosenCards);
  });

  return (
    <div className="Main">
      <ScoreBoard current={current} best={best} />
      <div className="GameBoard">
        <GameBoard cards={cardModule()} update={chooseCard} />
      </div>
    </div>
  );
}

export default Main;

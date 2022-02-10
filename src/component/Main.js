/* eslint-disable react/jsx-no-bind */
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
    if (result.length !== 0) {
      return false;
    }
    return true;
  }

  function updateScore(currentScore, bestScore) {
    if (currentScore >= bestScore) {
      setBest(currentScore);
    }
  }

  function chooseCard(modal) {
    if (isDuplicate(modal) === true) {
      setChosenCards(chosenCards.concat([modal.nativeEvent.path[1].id]));
      setCurrent(current + 1);
    } else {
      setCurrent(0);
      setChosenCards([]);
    }
  }

  useEffect(() => {
    updateScore(current, best);
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

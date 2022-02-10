/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function GameBoard({ cards, update }) {
  // const [current, setCurrent] = useState(0);
  // const [best, setBest] = useState(0);
  // const [chosenCards, setChosenCards] = useState([]);

  // function chooseCard(modal) {
  //   setChosenCards(chosenCards.concat([modal.nativeEvent.path[1].id]));
  //   update();
  // }

  return cards.map((card) => {
    return (
      <div
        className="CardModal"
        role="button"
        tabIndex={0}
        key={card.title}
        id={card.title}
        onClick={update}
        onKeyDown={update}
      >
        <img src={card.src} alt="FFXIV Character" className="Image" />
        <div className="IMGTitle">{card.title}</div>
      </div>
    );
  });
}

export default GameBoard;

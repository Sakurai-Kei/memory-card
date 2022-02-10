/* eslint-disable no-unused-vars */

function GameBoard({ cards, update }) {
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
        <img src={card.src} alt={`${card.title}`} className="Image" />
        <div className="IMGTitle">{card.title}</div>
      </div>
    );
  });
}

export default GameBoard;

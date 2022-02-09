function GameBoard({ cards }) {
  return cards.map((card) => {
    return (
      <div className="CardModal">
        <img src={card.src} alt="FFXIV Character" className="Image" />
        <div className="IMGTitle">{card.title}</div>
      </div>
    );
  });
}

export default GameBoard;

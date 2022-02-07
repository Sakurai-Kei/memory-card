function GameBoard({ cards }) {
  return cards.map((card) => {
    return (
      <div className="CardModal">
        <div className="Image">{card.src}</div>
        <div className="Title">{card.title}</div>
      </div>
    );
  });
}

export default GameBoard;

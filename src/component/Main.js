import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";

const cards = [
  {
    src: "First Image",
    title: "First Title",
  },
  {
    src: "Second Image",
    title: "Second Title",
  },
];

function Main() {
  return (
    <div className="Main">
      <ScoreBoard />
      <div className="GameBoard">
        <GameBoard cards={cards} />
      </div>
    </div>
  );
}

export default Main;

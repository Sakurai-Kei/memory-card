import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
import cardData from "../cardData/cardData";

function Main() {
  return (
    <div className="Main">
      <ScoreBoard />
      <div className="GameBoard">
        <GameBoard cards={cardData} />
      </div>
    </div>
  );
}

export default Main;

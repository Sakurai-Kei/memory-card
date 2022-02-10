import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
import cardModule from "../cardData/cardData";

function Main() {
  return (
    <div className="Main">
      <ScoreBoard />
      <div className="GameBoard">
        <GameBoard cards={cardModule()} />
      </div>
    </div>
  );
}

export default Main;

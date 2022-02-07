import PropTypes from "prop-types";

function ScoreBoard({ current, best }) {
  return (
    <div className="ScoreBoard">
      <div className="Current">
        <div>Current</div>
        <div>{current}</div>
      </div>
      <div className="Best">
        <div>Best</div>
        <div>{best}</div>
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  current: PropTypes.number,
  best: PropTypes.number,
};

ScoreBoard.defaultProps = {
  current: 0,
  best: 0,
};

export default ScoreBoard;

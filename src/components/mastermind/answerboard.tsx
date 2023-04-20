interface Props {
  guess: string[];
  verified: string[];
}

function AnswerBoard(props: Props) {
  

  return (
    <section className="row">

        <div id="gameTiles" className="col-auto tile-container">
          <div className={"tiles " + props.guess[0]}></div>
          <div className={"tiles " + props.guess[1]}></div>
          <div className={"tiles " + props.guess[2]}></div>
          <div className={"tiles " + props.guess[3]}></div>
        </div>

        <div id="anwserTiles" className="col-auto clue-container">
          <div className={"clue-tiles " + props.verified[0]}></div>
          <div className={"clue-tiles " + props.verified[1]}></div>
          <div className={"clue-tiles " + props.verified[2]}></div>
          <div className={"clue-tiles " + props.verified[3]}></div>
        </div>

    </section>
  );
}

export default AnswerBoard;

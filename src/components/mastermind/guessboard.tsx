import { useState } from "react";

function GuessBoard() {
  const optionfill: string[] = [
    "filled-orange",
    "filled-red",
    "filled-green",
    "filled-blue",
  ];

  const [currentGuess, setCurrentGuess] = useState(["", "", "", ""]);

  function changeFill(tileNum: number) {
    let nextColor: number = optionfill.indexOf(currentGuess[tileNum]) + 1;
    if (nextColor > optionfill.length) nextColor = 0;

    let updatedGuess: string[] = currentGuess.map((item, index) => {
      return tileNum === index ? optionfill[nextColor] : item;
    });

    setCurrentGuess([...updatedGuess]);
  }

  return (
    <section className="row">
      <div id="guesses" className="col-auto tile-container">
        <a
          className={"tiles " + currentGuess[0]}
          onClick={() => changeFill(0)}
        ></a>
        <a
          className={"tiles " + currentGuess[1]}
          onClick={() => changeFill(1)}
        ></a>
        <a
          className={"tiles " + currentGuess[2]}
          onClick={() => changeFill(2)}
        ></a>
        <a
          className={"tiles " + currentGuess[3]}
          onClick={() => changeFill(3)}
        ></a>
      </div>
    </section>
  );
}

export default GuessBoard;

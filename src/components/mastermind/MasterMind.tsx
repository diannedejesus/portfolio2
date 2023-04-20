import "./mastermind.css";
import GuessBoard from "./guessboard";
import AnswerBoard from "./answerboard";
import { useState } from "react";

function MasterMind() {
  const optionfill: string[] = [
    "filled-orange",
    "filled-red",
    "filled-green",
    "filled-blue",
  ];

  const [answerkey, setAnswerKey] = useState([
    optionfill[Math.floor(Math.random() * 4)],
    optionfill[Math.floor(Math.random() * 4)],
    optionfill[Math.floor(Math.random() * 4)],
    optionfill[Math.floor(Math.random() * 4)],
  ]);

  const [guessHistory, setGuessHistory] = useState<Array<Array<string>>>([]);
  const [verifiedHistory, setVerifiedHistory] = useState<Array<Array<string>>>(
    []
  );
  const [isSolved, setIsSolved] = useState(false);

  function checkanswer(event: React.MouseEvent<Element>) {
    console.log(answerkey);
    const tileNode = document.getElementById("guesses")?.childNodes;

    let guesskey: string[] = ["", "", "", ""];
    let verifiedkey: string[] = ["", "", "", ""];
    let answerCopy: string[] = answerkey.map((item) => item);

    tileNode?.forEach((item, index) => {
      //more exact, search each class in optionfill until a match is found if not empty
      guesskey[index] = (item as Element).classList[1];
    });

    setGuessHistory([...guessHistory, [...guesskey]]);

    setIsSolved(answerkey.every((item, index) => item === guesskey[index]));

    if (isSolved) {
      console.log("You won!");
    } else {
      let ansIndex: number = 0;

      guesskey.forEach((item, index) => {
        if (item !== "" && item === answerkey[index]) {
          verifiedkey[ansIndex] = "exact-clue";
          ansIndex++;
          guesskey[index] = "";
          answerCopy[index] = "";
        }
      });

      guesskey.forEach((item, index) => {
        if (item !== "" && answerCopy.includes(item)) {
          let answerPosition: number = answerCopy.indexOf(item);

          verifiedkey[ansIndex] = "parcial-clue";
          ansIndex++;
          guesskey[index] = "";
          answerCopy[answerPosition] = "";
        }
      });
    }

    setVerifiedHistory([...verifiedHistory, [...verifiedkey]]);
  }

  return (
    <section className="row gap-2 mm-game">
      <h1>Master the Code</h1>
      {guessHistory.map((item: string[], index) => (
        <AnswerBoard guess={item} verified={verifiedHistory[index]} />
      ))}
      <div className="w-auto text-center">
        {!isSolved && <GuessBoard />}

        {isSolved ? (
          <p className="container-fluid text-bg-success">
            Congratulations! You Win!
          </p>
        ) : (
          <button className="btn btn-secondary m-1" onClick={checkanswer}>
            Try
          </button>
        )}
      </div>
    </section>
  );
}

export default MasterMind;

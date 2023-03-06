import React from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"
import Guess from "../Guess/Guess"

function GuessResults({ guessList, answer, setGameStatus }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess
            key={num}
            val={guessList[num]}
            answer={answer}
            setGameStatus={setGameStatus}
          />
        ))}
      </div>
    </>
  )
}

/*

<Guess key=0 val=guessList[0] />
  <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {val ? val[num] : undefined}
        </span>
      ))}
  </p>

  <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {val ? val[num] : undefined}
        </span>
      ))} 

      ===
  
      <span key={0} className="cell">val[0] = "A"</span>
      <span key={1} className="cell">val[1] = "S"</span>
      <span key={2} className="cell">val[2] = "D"</span>
      <span key={3} className="cell">val[3] = "F"</span>
      <span key={4} className="cell">val[4] = "A"</span>

      
    </p>

<Guess key=1 val=guessList[1] /> 

*/

export default GuessResults

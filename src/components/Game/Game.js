import React, { useState } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessInput from "../GuessInput/GuessInput"
import GuessResults from "../GuessResults/GuessResults"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessList, setGuessList] = useState([])
  const [gameWonStatus, setGameWonStatus] = useState(false)

  return (
    <>
      <GuessResults
        guessList={guessList}
        answer={answer}
        setGameWonStatus={setGameWonStatus}
      />
      {gameWonStatus ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessList.length} guesses</strong>.
          </p>
        </div>
      ) : (
        <GuessInput setGuessList={setGuessList} />
      )}
    </>
  )
}

export default Game

import React from "react"
import { checkGuess } from "../../game-helpers"
import { range } from "../../utils"

function Guess({ val, answer }) {
  const valWithConditionals = checkGuess(val, answer)

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={val ? `cell ${valWithConditionals[num].status}` : "cell"}
        >
          {val ? val[num] : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess

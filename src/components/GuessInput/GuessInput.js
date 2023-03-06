import React, { useState } from "react"

function GuessInput({ setGuessList }) {
  const [guess, setGuess] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setGuessList((prevGuesses) => [...prevGuesses, guess])
    setGuess("")
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  )
}

export default GuessInput

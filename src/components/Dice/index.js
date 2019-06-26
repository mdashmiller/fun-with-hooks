import React, { useState } from 'react'
import './index.scss'

const Dice = () => {

  const [diceResult, setDiceResult] = useState({
    firstDieResult: 1,
    secondDieResult: 6
  })

  const firstDieImage = require(`../../assets/${diceResult.firstDieResult}.png`)
  const secondDieImage = require(`../../assets/${diceResult.secondDieResult}.png`)

  function rollDice() {
    setDiceResult({
      firstDieResult: Math.floor((Math.random() * 6) + 1),
      secondDieResult: Math.floor((Math.random() * 6) + 1)
    })
  }

  return (
    <div className="dice-app">
      <article className="roll-dice">
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={firstDieImage} className="die" alt="die one"/>
          <img src={secondDieImage} className="die" alt="die two"/>
        </div>
        <span>{diceResult.firstDieResult + diceResult.secondDieResult}</span>
        <button className="button" onClick={rollDice}>Roll</button>
      </article>
    </div>
  )
}

export default Dice

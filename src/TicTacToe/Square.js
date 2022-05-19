import React from 'react'
import './Square.css'

export default function ({num, value, handleClick, winnerPattern}) {
    const oTextColor = value[num] === 'O' ? 'colorOrange' : ''
    let wTextColor = false
    wTextColor = winnerPattern.includes(num) ? 'winnerColor' : ''
  return (
    <div className={`square ${wTextColor}`} onClick={() => handleClick(num)}>
        {value ? <button className={`valueButton ${oTextColor} `}>{value[num]}</button> : ''}
    </div>
  )
}

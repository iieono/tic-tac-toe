import React from 'react'
import Square from './Square'
import './TicTacToe.css';

export default function () {
    const [turn, setTurn] = React.useState('X')
    const [cells, setCells] = React.useState(Array(9).fill(''))
    const [winner, setWinner] = React.useState('')
    const [winnerPattern, setWinnerPattern] = React.useState(Array(3).fill(''))

    const checkForWinner = (squares) => {
        let combos ={
            across : [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down : [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal : [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }

        for (let combo in combos){
            combos[combo].forEach(pattern => {
                if(
                    squares[pattern[0]] === '' || 
                    squares[pattern[1]] === '' || 
                    squares[pattern[2]] === ''
                ){
                    //do nothing
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ){
                    setWinner(squares[pattern[0]])
                    setWinnerPattern(pattern)
                    
                }
            });
        }
    }

    const handleClick = (num) => {
        if(winner || cells.every((cell) => cell != '')){
            setWinner('')
            setCells(Array(9).fill(''))
            setTurn('X')
            setWinnerPattern(Array(3).fill(''))
            return
        }
        if(cells[num] != '') return
        let squares = [...cells]
        if (turn === 'X'){
            squares[num] = "X"
            setTurn('O')
        }else{
            squares[num] = "O"
            setTurn('X')
        }
        checkForWinner(squares)
        setCells(squares)
    }
    return (
        <div>
            <h1 className='turnHeader' >{winner ? `Winner: ${winner}` : `Turn: ${turn}`}</h1>
            <div className='container'>
                <Square num={0} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
                <Square num={1} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
                <Square num={2} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
                <Square num={3} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
                <Square num={4} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
                <Square num={5} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
                <Square num={6} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
                <Square num={7} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
                <Square num={8} handleClick={handleClick} value={cells} winnerPattern={winnerPattern}/>
            </div>
        </div>
    )
}

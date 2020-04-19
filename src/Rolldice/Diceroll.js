import React from 'react';
import './Diceroll.css';

let intiValaue = {
    betAmt: 500,
    GameStatus: 'About to start',
    DiceValue: 0,
    count: 0,
    selectedValue: undefined,
    result: undefined,
    winAmt: 0,
    arrayOfValue: [],
    totalRolled: [],
    totalWinAmt: []
}

export default class Diceroll extends React.Component {
    constructor() {
        super()
        this.state = {
            ...intiValaue
        }
    }

    onClickedBetAmt = (event) => {
        console.log("betAmount", event.target.innerText)
        let {betAmt} = this.state
        let temp = event.target.innerText
        if (temp === '-' && betAmt >= 500) {
            betAmt -= 500
        } else {
            betAmt += 500
        }
        this.setState({betAmt})
    }

    onClickedDice = (event) => {
        let {
            DiceValue,
            GameStatus,
            count,
            result,
            betAmt,
            arrayOfValue,
            selectedValue,
            winAmt,
            totalRolled,
            totalWinAmt
        } = this.state
        console.log("Array of value", arrayOfValue)
        console.log("selecValue clicked dice", selectedValue)
        if (count <= 6 && selectedValue !== undefined) {
            GameStatus = 'Game in progress'
            DiceValue = Math.ceil(Math.random() * 6)
            totalRolled = [
                ...totalRolled,
                DiceValue
            ]
            result = this.winner(DiceValue)

            count += 1
        } else {
            GameStatus = 'Game is over'
            //totalRolled =[]
        }
        console.log("winning amout before contion checking  ", winAmt)
        if (result === 'win') {
            if (selectedValue === "1 To 3") {
                winAmt += betAmt * 2
            } else if (selectedValue === "4 To 5") {
                winAmt += betAmt * 3
            } else {
                winAmt += betAmt * 4
            }
        } else {
            winAmt = winAmt - betAmt
        }
        console.log("winning amout After condition checking  ", winAmt)
        this.setState({
            DiceValue,
            GameStatus,
            count,
            result,
            winAmt,
            totalRolled,
            totalWinAmt: [
                ...totalWinAmt,
                winAmt
            ]
        })
    }

    onClickedChoice = (event) => {
        let {selectedValue, arrayOfValue, betAmt, winAmt} = this.state
        selectedValue = event.target.innerText
        if (selectedValue === "1 To 3") {
            arrayOfValue = [1, 2, 3]
            winAmt = betAmt * 2
            console.log("arrayOf Value", arrayOfValue)
        } else if (selectedValue === "4 To 5") {
            arrayOfValue = [4, 5]
            winAmt = betAmt * 3
            console.log("arrayOf Value", arrayOfValue)
        } else {

            arrayOfValue = [6]
            winAmt = betAmt * 4
            console.log("arrayOf Value", arrayOfValue)
        }
        this.setState({selectedValue, arrayOfValue})
    }
    winner(a)
    {
        let {arrayOfValue} = this.state
        for (let i = 0; i < arrayOfValue.length; i++) {
            if (arrayOfValue[i] === a) 
                return "win"
        }
        return 'loss'
    }

    restartGame = (event) => {
        this.setState(intiValaue)
    }

    render() {
        let {result, winAmt, DiceValue, totalRolled, totalWinAmt} = this.state
        console.log("state: ", this.state);
        return (

            <div className="calculator-wrap tic-tac-wrp">
                <div className="bet1 ">
                    <button onClick={this.restartGame}>Restart</button>
                    <h4>GameStatus :{this.state.GameStatus}
                    </h4>
                </div>
                <h4>
                    DiceValue :{DiceValue || 0}</h4>
                <h4>
                    Result :{result || " -- "}</h4>
                <h4>
                    Winning :{winAmt}</h4>
                <div className="container">
                    <div className='display'>
                        <div className="btn-cell" onClick={this.onClickedChoice}>1 To 3</div>
                        <div className="btn-cell" onClick={this.onClickedChoice}>4 To 5</div>
                        <div className="btn-cell" onClick={this.onClickedChoice}>6</div>
                    </div>

                    <div className='display'>
                        <div className="btn-cell " onClick={this.onClickedBetAmt}>-</div>
                        <div className="btn-cell ">{this.state.betAmt || 500}</div>
                        <div className="btn-cell " onClick={this.onClickedBetAmt}>+</div>
                    </div>
                </div>
                <div >
                    {totalRolled.map((digit, index) => <span key={index} className='run-circle'>{digit}</span>)}</div>
                <div>
                    {totalWinAmt.map((score, index) => <span key={index} className='run-circle'>{score}</span>)}</div>
                <div className="btn-cell " onClick={this.onClickedDice}>Roll Dice</div>

            </div>
        )
    }
}

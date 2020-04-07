import React from 'react';
import './TicTacToe.css';

const defaultState = {
    player1: 'O',
    player2: 'X',
    currPlayer: "",
    noOfGrid: 9,
    clickCount: 0,
    gridDetails: {}
}
export default class TicTacToe extends React.Component {
    constructor() {
        super()
        this.state = defaultState;
    }

    btnClickHandler = (event, index) => {
        let {clickCount, player1, player2, gridDetails} = this.state;
        let gridDetailsCopy = {
            ...gridDetails
        };
        if (!gridDetails[index]) {
            console.log("index: ", index);
            let currPlayer;
            if (clickCount % 2 === 0) {
                currPlayer = player1;
                // event.target.style.background = 'yellow'
            } else {
                currPlayer = player2;
                // event.target.style.background = 'lightgreen'
            }
            gridDetailsCopy[index] = currPlayer;
            clickCount += 1;
            this.setState({clickCount, currPlayer, gridDetails: gridDetailsCopy})
        }
    }
    restartGame = (event) => {
        this.setState(defaultState)
    }
    render() {
        const {clickCount, currPlayer, gridDetails} = this.state;
        console.log("state: ", this.state);

        return (
            <div className="calculator-wrap tic-tac-wrp">
                <button onClick={this.restartGame}>Restart</button>
                <div className="container">
                    <div className="row">
                        <div
                            className={`col-4 btn-cell ${gridDetails['00'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '00')}>{gridDetails['00'] || ""}</div>
                        <div
                            className={`col-4 btn-cell ${gridDetails['01'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '01')}>{gridDetails['01'] || ""}</div>
                        <div
                            className={`col-4 btn-cell ${gridDetails['02'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '02')}>{gridDetails['02'] || ""}</div>
                    </div>
                    <div className="row">
                        <div
                            className={`col-4 btn-cell ${gridDetails['10'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '10')}>{gridDetails['10'] || ""}</div>
                        <div
                            className={`col-4 btn-cell ${gridDetails['11'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '11')}>{gridDetails['11'] || ""}</div>
                        <div
                            className={`col-4 btn-cell ${gridDetails['12'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '12')}>{gridDetails['12'] || ""}</div>
                    </div>
                    <div className="row">
                        <div
                            className={`col-4 btn-cell ${gridDetails['20'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '20')}>{gridDetails['20'] || ""}</div>
                        <div
                            className={`col-4 btn-cell ${gridDetails['21'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '21')}>{gridDetails['21'] || ""}</div>
                        <div
                            className={`col-4 btn-cell ${gridDetails['22'] || ""}`}
                            onClick={(event) => this.btnClickHandler(event, '22')}>{gridDetails['22'] || ""}</div>
                    </div>
                </div>
                <div className='tic-tac-result'>
                    <h2>Player 1 Won!!!</h2>
                </div>
            </div>
        )
    }
}
import React from 'react';
import './TicTacToe.css'

export default class TicTacToe extends React.Component {
    constructor() {
        super()
        this.state = {};
    }
    render() {
        return (
            <div className="calculator-wrap tic-tac-wrp">
                <button>Restart</button>
                <div className="container">
                    <div className="row">
                        <div className="col-4 btn-cell"></div>
                        <div className="col-4 btn-cell"></div>
                        <div className="col-4 btn-cell"></div>
                    </div>
                    <div className="row">
                        <div className="col-4 btn-cell"></div>
                        <div className="col-4 btn-cell"></div>
                        <div className="col-4 btn-cell"></div>
                    </div>
                    <div className="row">
                        <div className="col-4 btn-cell"></div>
                        <div className="col-4 btn-cell"></div>
                        <div className="col-4 btn-cell"></div>
                    </div>
                </div>
                <div className='tic-tac-result'>
                    <h2>Player 1 Won!!!</h2>
                </div>
            </div>
        )
    }
}
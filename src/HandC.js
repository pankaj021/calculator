import React from 'react';
import './TicTacToe.css';

let intiValaue = { boxValue :"",
                 compValue  : "",
                numberOfBowl: 0,
                        result: "",
                        totalRun :0,
                        GameStatus :"About to start"
}


export default class HandC extends React.Component {
    constructor() {
        super()
        this.state = intiValaue
    }
    btnClickHandler = (event) => {
        let {boxValue,compValue,numberOfBowl,result,totalRun,GameStatus } = this.state
         if( numberOfBowl!==6 && result!=='out'){
            GameStatus ="Game in progress"    
         boxValue = parseInt(event.target.innerText)
         compValue  = Math.ceil(Math.random()*6,1000*2)
         numberOfBowl  += 1
        result = this.totalScore(boxValue,compValue)
        } else{
            GameStatus = 'GameOver'
        }
        this.setState({boxValue,compValue,result,numberOfBowl,totalRun,GameStatus})                                 
}

  totalScore (a, b){
      let {totalRun} = this.state
    if (a===b){ 
        return 'out'
    }else{
        totalRun += a+b
        return a+b
    }

  }

restartGame = (event) => {
        this.setState(intiValaue)
    }
   
render() {
        
        console.log("state: ",this.state);
        return (
            
            <div className="calculator-wrap tic-tac-wrp">
                <button onClick={this.restartGame}>Restart</button>
                <div className='display'>
                <h4>GameStatus :{this.state.GameStatus} </h4>
                    <h4>Player :{this.state.boxValue || 0} </h4>
                    <h4> Computer :{this.state.compValue || 0}</h4>
                    <h4> playerScore :{this.state.result || ' -'}</h4>
                    <h4> playerTotalScore :{this.state.totalRun || ' -'}</h4>
                   
                </div>
                <div className="container">
                    
                    <div className="row">
                        <div
                            className={`col-4 btn-cell $`} onClick={this.btnClickHandler}>1</div>
                        <div
                            className={`col-4 btn-cell $`} onClick={this.btnClickHandler}>2</div>
                         <div
                            className={`col-4 btn-cell $`} onClick={this.btnClickHandler}>3</div>
                        <div
                            className={`col-4 btn-cell $`} onClick={this.btnClickHandler}>4</div>   
                        <div
                            className={`col-4 btn-cell $`} onClick={this.btnClickHandler}>5</div>
                        <div
                            className={`col-4 btn-cell $`} onClick={this.btnClickHandler}>6</div>
                   
            </div>
            </div>
            </div>
        )
    }
}

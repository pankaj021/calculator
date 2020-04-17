import React from 'react';
import './Diceroll.css';

let intiValaue = { betAmt: 500,
    GameStatus : 'About to start',
    DiceValue : 0,
    count : 0,
    selectedValue :undefined,
    arrayOfValue : [],
    result : undefined
}



export default class Diceroll extends React.Component {
    constructor() {
        super()
        this.state = intiValaue
    }

  onClickedBetAmt= (event)=>{
      console.log("betAmount",event.target.innerText)
      let {betAmt} = this.state
      let temp = event.target.innerText
      if (temp==='-' && betAmt>=500)
      {     betAmt -=500
      }else{
          betAmt +=500}
          this.setState({betAmt})
      }

      onClickedDice = (event) => {
        let {DiceValue,GameStatus,count,result,arrayOfValue} = this.state
        console.log("Array of value",arrayOfValue)
        
        if(count<=6)
        {   GameStatus ='Game in progress'
            DiceValue = Math.ceil(Math.random()*6)
            result = this.winner(DiceValue)
        count +=1}
        else{
            GameStatus ='Game is over'}
             

        this.setState({DiceValue,GameStatus,count,result })
      }
        
      onClickedChoice = (event) =>{
           let {selectedValue,arrayOfValue} = this.state
           selectedValue = event.target.innerText
           if(selectedValue==="1 To 3")
           {
               arrayOfValue = [1,2,3]
               console.log("arrayOf Value",arrayOfValue)
           }else if(selectedValue==="4 To 5")
              {
                arrayOfValue = [4,5]
                console.log("arrayOf Value",arrayOfValue)
              }else{

                arrayOfValue = [6]
                console.log("arrayOf Value",arrayOfValue)
              }
      }
      winner(a)
      { let {arrayOfValue} = this.state
            for(let i=0;i<arrayOfValue.length;i++)
            {
                if(arrayOfValue[i]===a)
                     return "win"
            }
        
      }
    

restartGame = (event) => {
        this.setState(intiValaue)
    }
   
render() {
        
        console.log("state: ",this.state);
        return (
            
            <div className="calculator-wrap tic-tac-wrp">
                <div className="bet1 ">
                <button onClick={this.restartGame}>Restart</button>
                <h4>GameStatus :{this.state.GameStatus} </h4></div>
                <h4> DiceValue :{this.state.DiceValue  || 0}</h4>
                <h4> Result :{this.state.result || " -- "}</h4>
                <div className="container">
                     <div className='display'>
                           <div
                            className="btn-cell" onClick={this.onClickedChoice} >1 To 3</div>
                            <div
                            className="btn-cell" onClick={this.onClickedChoice} >4 To 5</div>
                            <div
                            className="btn-cell" onClick={this.onClickedChoice} >6</div>
                            </div>

                    <div className='display'>
                        <div
                            className="btn-cell " onClick={this.onClickedBetAmt}>-</div>
                            <div
                            className="btn-cell " >{this.state.betAmt || 500}</div>
                         <div
                            className="btn-cell " onClick={this.onClickedBetAmt}>+</div>
                        </div>
                        </div>
                         <div
                            className="btn-cell " onClick={this.onClickedDice}>Roll Dice</div>
                    
            
            </div>
        )
    }
}

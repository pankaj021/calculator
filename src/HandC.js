import React from 'react';
import './TicTacToe.css';




export default class HandC extends React.Component {
    constructor() {
        super()
        this.state = { boxValue :"",
                       compValue : "",
                       numberOfBowl: 0,
                        out: ""
                     }
    }
    btnClickHandler = (event) => {
        let {boxValue,compValue,numberOfBowl,out } = this.state
        boxValue = parseInt(event.target.innerText)
         console.log("clickedBn >>>>>",event.target.innerText)
         compValue  = Math.ceil(Math.random()*6,1000*2)
         numberOfBowl  += 1
         console.log('numberofbowl',numberOfBowl)
         console.log('compValue',compValue)
         if(compValue===boxValue)
         {   out = 'gone'
             
           }
         else if(numberOfBowl===6){
             out = 'finish'
         }
        this.setState({boxValue,compValue,out,
                            numberOfBowl})
       console.log(out)      
                                   
}
restartGame = (event) => {
        this.setState({ boxValue :"",
        compValue  : "",
        numberOfBowl: 0,
             out: ""
     })
    
    }
   
render() {
        
        console.log("state: ",this.state);
        return (
            
            <div className="calculator-wrap tic-tac-wrp">
                <button onClick={this.restartGame}>Restart</button>
                <div className='display'>
                    <h4>Player:{this.state.boxValue || 0} </h4>
                    <h4> Computer:{this.state.compValue || 0}</h4>
                    <h4> playerStatus:{this.state.out}</h4>
                   
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

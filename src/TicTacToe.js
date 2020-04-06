import React from 'react';
import './TicTacToe.css'




export default class TicTacToe extends React.Component {
    constructor() {
        super();
        this.state = { turn : 'X',
                       gameEnded : false,
                       board : [],//Array(9).fill('')
                       winner : undefined,
                       totalMoves : 0,
                       resultLine : 'Game is about to start'
                    }
        }

        onClicked  = (event) => {
            const temp =   this.state.board
            let incre = this.state.totalMoves
           // if(temp[event.target.dataset.square] === '')
            temp[event.target.dataset.square] = this.state.turn
            console.log("oncliked >>> ", event.target)
            event.target.innertext = this.state.turn;
            console.log("oncliked >>> ", event.target.innertext)

             this.setState({
                      turn : this.state.turn === 'X' ? 'O' : 'X',
                      board : temp,
                      totalMoves : incre++ 
            })
        

            let result = this.checkWinner();
            if(result === 'X')
            {  this.setState({gameEnded : true, winner : 'X', resultLine : 'X won the game'})
            }else if(result === '0'){
                this.setState({gameEnded : true, winner : '0', resultLine : '0 won the game'})
            }else if (result === 'draw'){
                this.setState({gameEnded : true, winner : 'draw', resultLine : 'Game drawn'})
            }

            console.log(">>>>>",this.state.board)
 }
    checkWinner(){
     var moves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
                    let temp = this.state.board
                    for(let i=0;i<moves.lenth;i++)
                    {
                     if(temp[moves[i][0]] === temp[moves[i][1]] && temp[moves[i][1]]=== temp[moves[i][2]])
                       {
                      return temp[moves[i][0]]
                     }    
                  }

                  if(this.state.totalMoves === 9)
                  {
                      return 'draw'
                  }

    }
   

    render() {
        return (
            <div className="calculator-wrap tic-tac-wrp">
                <button >Restart</button>
                <div className="container" onClick={this.onClicked}>
                <div className="row" >
                        <div className="col-4 btn-cell" data-square="0"></div>
                        <div className="col-4 btn-cell" data-square="1"></div>
                        <div className="col-4 btn-cell" data-square="2"></div>
                    </div>
                    <div className="row" >
                        <div className="col-4 btn-cell" data-square="3"></div>
                        <div className="col-4 btn-cell" data-square="4"></div>
                        <div className="col-4 btn-cell"data-square="5" ></div>
                    </div>
                    <div className="row" >
                        <div className="col-4 btn-cell" data-square="6"></div>
                        <div className="col-4 btn-cell" data-square="7"></div>
                        <div className="col-4 btn-cell" data-square="8"></div>
                    </div> 
                </div>
                <div className='tic-tac-result'>
        <h2> {this.state.resultLine}</h2>
                </div>
            </div>
        )
    }
}
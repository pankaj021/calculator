import React, {PureComponent} from 'react';
import Ball from './Ball';

let defaultState = {
    ballNo: 0,
    runScored: 0,
    btnText: "Start Innings"
};
export default class Over extends PureComponent {
    constructor() {
        super()
        this.state = {
            ...defaultState
        }
    }

    nextBall = (event) => {
        let {ballNo, runScored} = this.state;
        if (ballNo < 6) {
            ballNo += 1;
            runScored = Math.floor(7 * Math.random());
            this
                .props
                .setRunHistoryFunc(runScored); // child to parent communication, through parent function reference
            this.setState({ballNo, runScored, btnText: "Next Bowl"});
        } else {
            this
                .props
                .inningsChangedFunc();
            this.setState({
                ...defaultState
            })
        }
    }

    getBallList = () => {
        let ballList = [];
        for (let index = 1; index < 7; index++) {
            let className = 'bowl';
            if (index <= this.state.ballNo) {
                className += ' bowl-delivered'
            }
            let ball = {
                ballNo: index,
                className
            }
            ballList.push(<Ball key={index} {...ball}/>)
        }
        return ballList;
    }

    render() {
        console.log("this.state: ", this.state);

        return (
            <div>
                <div className='over'>
                    {this.getBallList()}
                </div>
                <button className='next-bowl' onClick={this.nextBall}>{this.state.btnText}</button>
            </div>
        )
    }
}

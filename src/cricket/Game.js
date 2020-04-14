import React, {PureComponent} from 'react';
import ScoreBoard from './ScoreBoard';
import './Game.css'
import Over from './Over';

const innings = {
    runHistory: []
}

const defaultState = {
    battingTeam: 0,
    innings: [
        {
            teamName: "Team1",
            ...innings
        }, {
            teamName: "Team2",
            ...innings
        }
    ]
}

export default class Game extends PureComponent {
    constructor() {
        super()
        this.state = defaultState;
    }
    setRunHistory = (runScored) => {
        let {battingTeam, innings} = this.state;
        let currentInnings = innings[battingTeam];
        let runHistory = currentInnings.runHistory;
        let newRunHistory = [
            ...runHistory,
            runScored
        ];
        currentInnings.runHistory = newRunHistory;
        let newInnings = [...innings]; // copy of innings
        newInnings[battingTeam] = currentInnings;
        this.setState({innings: newInnings})
    }
    inningsChanged = () => {
        this.setState({battingTeam: 1})
    }
    render() {
        return (
            <div className='cricket'>
                <ScoreBoard gameStatics={this.state}/>
                <Over
                    setRunHistoryFunc={this.setRunHistory}
                    inningsChangedFunc={this.inningsChanged}/>
            </div>
        )
    }
}

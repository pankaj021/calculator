import React from 'react';
import Innings from './Innings';

export default function ScoreBoard(props) {
    console.log("props:::::::", props.gameStatics);

    return (
        <div className='scoreboard'>
            <h4 className='scoreboard-title'>ScoreBoard</h4>
            <div className='scoreboard-body'>
                <Innings innings={props.gameStatics.innings[0]} isBatting={true} index={0}/>
                <Innings innings={props.gameStatics.innings[1]} isBatting={false} index={1}/>
            </div>
        </div>
    )
}
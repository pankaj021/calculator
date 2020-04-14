import React from 'react';

function totalRuns(runHistory) {
    let totalRuns = 0;
    for (let index = 0; index < runHistory.length; index++) {
        totalRuns += runHistory[index];
    }
    return totalRuns;
}

export default function Innings({innings, index, isBatting}) {
    const {teamName, runHistory} = innings;
    return (
        <div className={`innings innings${index}`}>
            <h4 className='innings-title'>
                {teamName}
                <span className='is-batting'>{isBatting
                        ? "(batting)"
                        : ""}
                </span>
            </h4>
            <div className='statics'>
                <div className='total-score'>Total score: {totalRuns(runHistory)}</div>
                {runHistory.map((run, index) => <span key={index} className='run-circle'>{run}</span>)}
            </div>
        </div>
    )
}
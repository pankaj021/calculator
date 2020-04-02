import React from 'react';
import './Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
    return (
        <div className="calculator-wrap">
            <h2 className='display'>12312</h2>
            <div className="container">
                <div className="row">
                    <div className="col-3 btn-cell">1</div>
                    <div className="col-3 btn-cell">2</div>
                    <div className="col-3 btn-cell">3</div>
                    <div className="col-3 btn-cell">4</div>
                </div>
                <div className="row">
                    <div className="col-3 btn-cell">1</div>
                    <div className="col-3 btn-cell">2</div>
                    <div className="col-3 btn-cell">3</div>
                    <div className="col-3 btn-cell">4</div>
                </div>
                <div className="row">
                    <div className="col-3 btn-cell">1</div>
                    <div className="col-3 btn-cell">2</div>
                    <div className="col-3 btn-cell">3</div>
                    <div className="col-3 btn-cell">4</div>
                </div>
                <div className="row">
                    <div className="col-3 btn-cell">1</div>
                    <div className="col-3 btn-cell">2</div>
                    <div className="col-3 btn-cell">3</div>
                    <div className="col-3 btn-cell">4</div>
                </div>
            </div>

        </div>
    )
}

export default Calculator;
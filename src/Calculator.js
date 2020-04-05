import React from 'react';
import './Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function add(o1, o2) {
    return o1 + o2
}
function sub(o1, o2) {
    return o1 - o2
}
function mul(o1, o2) {
    return o1 * o2
}
function div(o1, o2) {
    return o1 / o2
}

const oprMap = {
    "+": add,
    "-": sub,
    "*": mul,
    "/": div
}

const defaultState = {
    o1: "",
    o2: "",
    result: "",
    operator: ""
}

export default class Calculator extends React.Component {
    constructor() {
        super()
        this.state = defaultState;
    }
    onClickTxtBtn = (event) => {
        const btnTxt = event.target.innerText;
        let {o1, o2, operator} = this.state;
        if (operator) {
            o2 = o2 + btnTxt;
        } else {
            o1 = o1 + btnTxt;
        }
        this.setState({o1, o2});
    }
    onClickOperator = (event) => {
        const operator = event.target.innerText;
        this.setState({operator});
    }
    onClickCalculate = () => {
        const {o1, o2, operator} = this.state;
        const calFunRef = oprMap[operator];
        const result = calFunRef(parseFloat(o1), parseFloat(o2));
        this.setState({result: result});
    }
    resetCal = () => {
        this.setState(defaultState);
    }
    render() {
        const {o1, o2, result, operator} = this.state;
        return (
            <div className="calculator-wrap">
                <button onClick={this.resetCal}>Reset</button>
                <div className='display'>
                    <h4>Result = {result || 0}</h4>
                    <h2>{o1 || ""}{operator || ""}{o2 || ""}</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>1</div>
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>2</div>
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>3</div>
                        <div className="col-3 btn-cell" onClick={this.onClickOperator}>+</div>
                    </div>
                    <div className="row">
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>4</div>
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>5</div>
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>6</div>
                        <div className="col-3 btn-cell" onClick={this.onClickOperator}>-</div>
                    </div>
                    <div className="row">
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>7</div>
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>8</div>
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>9</div>
                        <div className="col-3 btn-cell" onClick={this.onClickOperator}>*</div>
                    </div>
                    <div className="row">
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>0</div>
                        <div className="col-3 btn-cell" onClick={this.onClickTxtBtn}>.</div>
                        <div className="col-3 btn-cell equal-op" onClick={this.onClickCalculate}>=</div>
                        <div className="col-3 btn-cell" onClick={this.onClickOperator}>/</div>
                    </div>
                </div>

            </div>
        )
    }
}
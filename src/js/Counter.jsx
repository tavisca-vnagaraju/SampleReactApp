import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component{
    render(){
        const {counter } = this.state;
        return <div>
            <h1>Counter : {counter}</h1>
            <button onClick={this.changeValue.bind(this,'INCREMENT')}> Increment</button>
            <button onClick={this.changeValue.bind(this,'DECREMENT')}> Decrement</button>
        </div>
    }
    changeValue(action){
        let currentValue = this.state.counter;
        const newValue  = action ==='INCREMENT' ? currentValue+1:currentValue-1;
        this.setState({
            counter:(newValue>=0?newValue:0)
        });
    }
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
}

module.exports = Counter;
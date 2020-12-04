import React, { Component } from 'react';

class Counter extends Component{
    state ={
        value : 0
    }
   
    onInc =()=>{
      this.setState({value: this.state.value + 1});
    }
    onDec =()=>{
        this.setState({value: this.state.value - 1});
    }
    render(){
        return(
             
            <>
            <button onClick={this.onDec}>-</button>
            <h1>{this.state.value}</h1>
            <button onClick={this.onInc}>+</button>
            </>

        );
    }
}

export default Counter;


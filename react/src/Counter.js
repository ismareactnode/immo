import React, { Component } from 'react';

class Counter extends Component{

  state = {
    count: 0,
  }
componentDidUpdate(prevProps, prevState){
  if(prevState.count !== this.state.count){
    localStorage.setItem('count', this.state.count);
  }
}

componentDidMount(){
  const stringCount = localStorage.getItem('count');
  const count = parseInt(stringCount, 10);
  if (!isNaN(count)){
    this.setState(()=>({count}));
  }
}

  render(){

  const add1 = (e) => {
      e.preventDefault();
      this.setState((prevState)=>{return{count: prevState.count += 1}});
    }
    const minus1 = (e) => {
      e.preventDefault();
      this.setState((prevState)=>{return{count: prevState.count -= 1}});
    }
    const reset = (e) => {
      e.preventDefault();
      this.setState(()=>{return{count: 0}});
    }
    return(
      <div>

      <p>{this.state.count}</p>
      <button
onClick={add1}
      >Ajouter 1</button>
      <button
      onClick = {minus1}>Enlever 1</button>
      <button
      onClick={reset}>Reset</button>
      </div>

    );
  }
}

export default Counter;

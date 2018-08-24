import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>{
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}



const renderComponent = (wrappedComponent) => {
  return (props)=> (
      <wrappedComponent {...props} />
  );
}


const HOC = renderComponent(Info);


ReactDOM.render()

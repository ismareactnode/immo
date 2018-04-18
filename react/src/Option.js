import React from 'react';

const Option = ({text, remove}) =>
  <p>{text}
    <button
    onClick = {
      (e) => {
        remove(text)
      }
    }
    >Remove</button>
  </p>;

export default Option;

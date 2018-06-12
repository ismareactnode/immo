import React from 'react';
import Banniere from './Banniere';
import Bande from './Bande';
import Devaux from './Devaux';
import Bande2 from './Bande2';
import Pantin from './Pantin';
import Bande3 from './Bande3';
import Dernieres from './Dernieres';

const Slices = () => {
  return(
    <div>
      <Bande />
      <Devaux />
      <Bande2 />
      <Pantin />
      <Bande3 />
      <Dernieres />
    </div>
  );
}

export default Slices;

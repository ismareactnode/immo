import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AppartementItem = ({ _id, quartier, superficie, prix }) => {

  return(
    <div>
  <Link to={`/editAppartement/${_id}`}>
    <ul>
      <li>{_id}</li>
      <li>{superficie} m2</li>
      <li>{quartier}</li>
      <li>{prix}</li>
      <Link to={`/confirmationSuppression/${_id}`}><li>Supprimer</li></Link>
    </ul>
    </Link>
    </div>
  );
}

export default connect()(AppartementItem);

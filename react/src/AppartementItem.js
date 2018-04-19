import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AppartementItem.css';

const AppartementItem = ({ _id, genre, quartier, superficie, prix }) => {

  return(
    <div id="appartItem">
  <Link to={`/editAppartement/${_id}`}>
    <ul>
      <li>{genre}</li>
      <li>{superficie} m2</li>
      <li>{quartier}</li>
      <li>{prix} €</li>
    </ul>
    </Link>
    <Link to={`/confirmationSuppression/${_id}`}><li>Supprimer</li></Link>
    </div>

  );
}

export default connect()(AppartementItem);

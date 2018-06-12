import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './AppartementItem.css';

const AppartementItemVisitor = ({ _id, genre, nbPieces, quartier, superficie, prix, photo }) => {
   genre = genre.toLowerCase();
  return(
    <div id="carteSmall" className="col-sm-12 col-md-6 col-lg-4">
      <NavLink to={`detailsAppartement/${_id}`}>
        <div id="carteSmallFlexBox">

          <div id="carteSmallPhoto">
            <img src={photo} alt="photo" className="responsiveTof"/>
          </div>

          <div id="carteSmallInfos">
            <ul>
              <li>{quartier}</li>
              <li>{genre}</li>
              {
                genre === 'appartement' || genre === 'maison'?
              <li>{nbPieces}</li>
              : null
              }
              <li>{superficie} m2</li>
              <li>{prix} €</li>
            </ul>
         </div>
        </div>
    </NavLink>


  </div>

  );
}

export default connect()(AppartementItemVisitor);

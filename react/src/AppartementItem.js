import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AppartementItem.css';

const AppartementItem = ({ _id, genre, nbPieces, quartier, superficie, prix, photo }) => {
   genre = genre.toLowerCase();
  return(
    <div id="carteSmall" className="col-sm-12 col-md-6 col-lg-4">

      <Link to={`/editAppartement/${_id}`}>

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
            <Link to={`/confirmationSuppression/${_id}`}>
            <button id="delete" type="btn btn-danger btn-sm">Supprimer</button>
            </Link>
         </div>
        </div>
    </Link>


  </div>

  );
}

export default connect()(AppartementItem);

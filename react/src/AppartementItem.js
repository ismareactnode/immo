import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AppartementItem.css';

const AppartementItem = ({ _id, genre, nbPieces, quartier, superficie, prix, photo }) => {
   genre = genre.toLowerCase();
  return(
    <div id="carteSmall" className="col-sm-12 col-md-6 col-lg-4">

      <Link to={`/editAppartement/${_id}`}>

        <div className="carteSmallFlex">

            <img src={photo} alt="photo"  className="flexTofImage"/>

          <div id="flexText">
            <ul>

            <li>{genre === 'appartement' || genre === 'maison'?
          `${genre} ${nbPieces}`
            : `${genre}`}</li>

          <li><span>{`${superficie} m2`}</span><span className="flexTextPrix">{`     ${prix} €  `}</span></li>
              <li><span className="flexTextQuartier">{quartier}</span></li>
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

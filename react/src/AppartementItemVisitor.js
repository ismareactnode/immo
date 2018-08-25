import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import { NavLink } from 'react-router-dom';

import './AppartementItem.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const AppartementItemVisitor = ({ _id, genre, nbPieces, quartier, superficie, prix, photo }) => {
   genre = genre.toLowerCase();
  return(
    <div id="carteSmall" className="col-sm-12 col-md-6 col-lg-4">
      <NavLink to={`detailsAppartement/${_id}`}>
        <div className="carteSmallFlex">
              <img src={photo} className="flexTofImage"/>
              <div className="flexText">
                  <ul>

                  <li>{genre === 'appartement' || genre === 'maison'?
                `${genre} ${nbPieces}`
                  : `${genre}`}</li>

                <li><span>{`${superficie} m2`}</span><span className="flexTextPrix">{`     ${prix} €  `}</span></li>
                  <li></li>
                    <li><span className="flexTextQuartier">{quartier}</span></li>
                </ul>
              </div>
        </div>

    </NavLink>


  </div>

  );
}

export default connect()(AppartementItemVisitor);

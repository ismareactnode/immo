import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './DetailsAppartement.css';


class DetailsAppartement extends Component{

  componentWillMount(){
    console.log(this.props.match.params);
  }
  render(){
    const { genre, quartier, superficie, prix, photo, nbPieces} = this.props.appartement;
    return(
      <div id="DetailsAppartement">
        <div className="linkToList">
          <button className="btn btn-primary"><Link to="/catalogue">Retour</Link></button>
        </div>
        <div className="detailsPhotoContainer">
            <div className="exclusivite">
              <p>Exclusivité</p>
            </div>
            <div className="detailsPhotoDescriptif">
              <div>{genre} - <span className="detailsPhotoPrix">{prix} €</span></div>
              <div>{nbPieces} {superficie} m2</div>
              <div><span className="detailsQuartier">{quartier}</span></div>
            </div>
          <img src={require(`./${photo}`)} className="bigPhoto" />
        </div>

        <div className="detailsTextContainer">
          <div className="detailsText">
            <h4>ACHAT {genre} {nbPieces ? nbPieces : ''} à {quartier}</h4>
          </div>


          <div className="caractRight">

            <div className="caractRight1">
                <div className="caracteristiquesGenrePrix">
                  <div className="caracteristiquesGenre">
                    {genre}
                  </div>
                  <div className="caracteristiquesPrix">
                  { prix } €
                  </div>
                </div>

                <div className="caracteristiquesPiecesSuperficie">
                   <p>{nbPieces} {superficie} m2</p>
                   <p>{quartier} </p>
                </div>
              </div>

              <Link to="/contact"><div className="caractRight2">
                CONTACTER L AGENCE
              </div></Link>

              <div className="caractRight3">

                     <div className="caractMailDiv">
                       <div>
                         <span className="glyphicon glyphicon-envelope caractMail"></span>
                         <a href="mailto:immo-devaux@wanadoo.fr">immo-devaux@wanadoo.fr</a>
                       </div>
                     </div>
                    <div className="caractTelDiv">
                      <div>
                        <span className="glyphicon glyphicon-earphone caractTel"></span>
                        <span>01 48 40 44 11</span>
                      </div>
                    </div>
              </div>


          </div>





        </div>

      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
    return{
    appartement: state.catalogue.find((appartement) => appartement._id === props.match.params.id)
  };
};
export default connect (mapStateToProps, null) (DetailsAppartement);

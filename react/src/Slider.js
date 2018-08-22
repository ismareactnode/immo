import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Slider.css';

class Slider extends Component{

  // catalogue(e){
  //   e.preventDefault();
  //   this.props.history.push('/catalogue');
  // }

  render(){
    return(
      <div className="slider">
        <div className="actions">
          <div className="haut">
            <h4>Vous souhaitez</h4>
          </div>
          <div className="bas">
            <div className="basLeft">

              <div className="basLeftUp case"
              // onClick={e=>{this.catalogue(e)}}
              >
                <Link to="/catalogue"><h3>ACHETER</h3></Link>
              </div>
              <div className="basLeftDown case">
                <Link to="/estimation"><h3>VENDRE</h3></Link>
              </div>
            </div>
            <div className="basRight">

              <div className="basRightDown case">
                <Link to="/faireGerer"><h3>FAIRE GERER</h3></Link>
              </div>
              <div className="basRightUp case">
                <Link to="/contact"><h3>CONTACTER</h3></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Slider;

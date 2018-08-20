import React, { Component } from 'react';
import './Caroussel.css';

// dernier bar avant la fin du monde
const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);

const imgUrls = ['./immeublePantin.jpg', './terrassePantin.jpg', 'appartPantin.jpg'];
const descriptifs = [{type: 'Appartement', nbPieces: '2 pièces', superficie: '67m2',
 prix: '200 000€', quartier: 'Eglise de Pantin'},
  {type:'Maison', nbPieces: '5 pièces',
  superficie: '167m2', prix: '350 000€', quartier: 'Quatre chemins'} ,
  {type: 'Appartement', nbPieces: 'Studio', superficie: '39m2', prix: '120 000€',
   quartier: 'Hoche'}];

const Descriptif= ({text})=>{
  return (
    <div className="descriptifText">
      <h4>{text.type} <span className="descriptifFontWeight">{text.nbPieces}</span></h4>
      <p className="descriptifPrix">{text.prix}</p>
      <h4><span className="descriptifFontWeight">{text.superficie}</span>     {text.quartier}</h4>

    </div>
  );
}

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div
     className="image-slide"
      style={styles}>

      </div>
  );
}

class Carousel extends Component {
  constructor (props) {
  super(props);

  this.state = {
    currentImageIndex: 0
  };
  this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
}

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex :
    currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }
    render () {
      return (
        <div className="caroussel">
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

          <ImageSlide
          url={ imgUrls[this.state.currentImageIndex] }
           />
          <Descriptif
            text={descriptifs[this.state.currentImageIndex]}
          />
          <Arrow
            direction="right"
            clickFunction={ this.nextSlide }
            glyph="&#9654;" />
        </div>
      );
    }
  }

  export default Carousel;
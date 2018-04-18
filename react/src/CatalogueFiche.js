import React from 'react';

const CatalogueFiche = (props) => {
  return(
    <div>
      <h2>Fiche détaillée de l'appartememnt numéro {props.match.params.id} : </h2>
    </div>
  );
}

export default CatalogueFiche;

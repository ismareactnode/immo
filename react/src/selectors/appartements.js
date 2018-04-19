



export default (appartements, {text, genre,sortBy, nbPieces})=>{
  return appartements
      .filter(appartement => {
        const textQuartier = appartement.quartier.toLowerCase().includes(text.toLowerCase());
        const genreMatch = genre.toLowerCase().includes(appartement.genre.toLowerCase());
        const nbPiecesMatch = nbPieces.toLowerCase().includes(appartement.nbPieces.toLowerCase());
        return textQuartier && genreMatch && nbPiecesMatch;})

      .sort((a, b)=>{
        if(sortBy === "prix"){
          return a.prix > b.prix ? 1 : -1;
        }
        if(sortBy === "superficie"){
          return a.superficie > b.superficie ? 1 : -1;
        }
      });
}

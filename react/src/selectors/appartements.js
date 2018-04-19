



export default (appartements, {text, genre,sortBy})=>{
  return appartements
      .filter(appartement => {
        const textQuartier = appartement.quartier.toLowerCase().includes(text.toLowerCase());
        const genreMatch = genre.toLowerCase().includes(appartement.genre.toLowerCase());
        return textQuartier && genreMatch;})

      .sort((a, b)=>{
        if(sortBy === "prix"){
          return a.prix > b.prix ? 1 : -1;
        }
        if(sortBy === "superficie"){
          return a.superficie > b.superficie ? 1 : -1;
        }
      });
}

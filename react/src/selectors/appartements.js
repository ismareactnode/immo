



export default (appartements, {text, sortBy})=>{

  return appartements
      .filter(appartement => {
        const textMatch = appartement.quartier.toLowerCase().includes(text.toLowerCase());
        return textMatch;})
      .sort((a, b)=>{
        if(sortBy === "prix"){
          return a.prix > b.prix ? 1 : -1;
        }
        if(sortBy === "superficie"){
          return a.superficie > b.superficie ? 1 : -1;
        }
      });
}

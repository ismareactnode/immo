var mongoose = require ('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Immobiliare');

/*  ici on va chercher dans .env la variable contenant l'url de la DATABASE_URL
sur mongolab
.env est caché à la racine par gitignore
et fonctionne grace à dotenv qu'on a installé
il ne faut pas pousser, et pas que le client voit les infos sensibles
telles que la database_url, que l'on a rentré parmi les variables d'environnement*/
// mongoose.connect(process.env.DATABASE_URL);

/*  ca, c'est juste pour observer la connexion, optionnel,
à retirer par la suite  */
var db = mongoose.connection;

module.exports={mongoose, db};

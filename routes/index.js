var express = require('express');
var router = express.Router();

// initialisation des variables dans la portée globale

var result_mot = "";
var result_search = "";
var nbMots = "";
var mot = "";
var nombre = "";
var arrayText = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { result_mot, result_search });
});

/* POST home page. */
router.post('/search', function(req, res, next) {
        // compter le nombre de mots
        arrayText = req.body.text.split(" ");
        nbMots = arrayText.length;
        result_mot = "Il y a " + nbMots + " mots dans le texte ci-dessus."

        // capter le mot saisi dans le formulaire
        mot = req.body.mot.toLowerCase();

        // compter le nombre de fois que le mot saisi dans le formulaire est présent dans le texte
          // réinitialiser le nombre de mot avant chaque recherche
          nombre = "";
        // allo Houston, je commence à compter
        for (var i = 0 ; i < arrayText.length ; i++) {
          var motLowerCase = arrayText[i].toLowerCase();
          if (motLowerCase.match(mot)) {
            nombre++;
          }
        //   // afficher le résultat
          if (nombre != 0) {
            result_search = 'Le mot "' + mot + '" est présent ' + nombre + ' fois dans le texte ci-dessus.';
          } else {
            result_search = 'Le mot "' + mot + '" n\'a pas été trouvé dans le texte ci-dessus.';
          }
        }
  res.render('index', { result_mot, result_search });
});

module.exports = router;

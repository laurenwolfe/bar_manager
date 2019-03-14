var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
   res.render('cocktail_results', {
      results: [
         { _id: 1, name: "20th Century" },
         { _id: 2, name: "Absinthe Drip" },
         { _id: 3, name: "Bee's Knees" },
         { _id: 4, name: "Café Arroz" }
       ]});
});

module.exports = router;
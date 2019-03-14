var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
//    res.render('index', { title: 'Cocktail View' });
    res.render('cocktail', {
        _id: 1,
        name: "20th Century",
        ingredients: [
            { ingredient: { name: "Lillet Blanc" }, amount: 0.75, unit: "oz" },
            { ingredient: { name: "Plymouth Gin" }, amount: 1.5, unit: "oz" },
            { ingredient: { name: "Lemon Juice" }, amount: 0.75, unit: "oz" },
            { ingredient: { name: "Creme de Cacao" }, amount: 0.75, unit: "oz" }
        ],
        glass: "Coupe",
        instructions: "Shake with ice and strain into chilled coupe."
    });
});

module.exports = router;

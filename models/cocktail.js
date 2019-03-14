const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    type: String,
    subtypes: [String]
});

const cocktailSchema = new Schema({
    _id: Number,
    name: String,
    ingredients: [{
        ingredient: {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        },
        amount: Number,
        unit: String
    }],
    glass: String,
    instructions: String
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
const Cocktail = mongoose.model('Cocktail', cocktailSchema);

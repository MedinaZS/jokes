const mongoose = require("mongoose");

// Crear un esquema para Joke
const JokeSchema = new mongoose.Schema({
    setup: { 
        type: String,
        required:[true,"Setup is required"],
        minlenght:[10, "Setup must be at least 10 characters long"] 
    },
    punchline: 
    { 
        type: String,
        required:[true,"Punchline is required"],
        minlenght:[3, "Punchline must be at least 3 characters long"]
    }
},
    { timestamps: true }
)

// crear una función constructora para nuestro modelo y almacenarla en la variable 'Joke'
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;


const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    id: {
        type: String
    },
    heroi: {
        type: String,
        required: true
    },
    pontosVida: {
        type: Number,
        required: true,
    },
    forca: {
        type: Number,
        required: true
    },
    defesa: {
        type: Number,
        required: true
    },
    agilidade: {
        type: Number,
        required: true
    },
    fatorDano: {
        type: Number,
        required: true  
    }
});

mongoose.model('Player', PlayerSchema);
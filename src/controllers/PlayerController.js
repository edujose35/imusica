const mongoose = require("mongoose");

const Player = mongoose.model("Player");

module.exports = {
    async index(request, response){
        const { p = 1 } = request.query;
        const player = await Player.find();

        return response.json(player);
    },

    async create(request, response){
        const player = await Player.create(request.body);

        return response.json(player);
    },

    async destroy(request, response){
        const player = Player.findByIdAndDelete(request.body.id);

        return response.json(player);
    }       
};
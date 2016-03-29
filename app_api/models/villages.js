var mongoose = require( 'mongoose' );

var villageSchema = new mongoose.Schema({
    Aldea: String,
    Oro: Number,
    PctOro: {type: Number, min:0, max:100},
    Elixir: Number,
    PctElixir: {type: Number, min:0, max:100}, 
    Oscuro: Number,
    PctOscuro: {type: Number, min:0, max:100}, 
    Constructores: {type: Number, min:0, max:5},
    Copas: Number,
    Gemas: Number, 
    Status: {type: Number, min:0, max:2}, 
    Timestamp: String,
    OroXhora: String,                                                                                                                                                                                              
    ElixirXhora: String,                                                                                                                                                                                           
    OscuroXhora: String
});

mongoose.model('Village', villageSchema)
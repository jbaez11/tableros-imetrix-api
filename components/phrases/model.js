const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn } = require('../../db');
const Schema = mongoose.Schema;

const phrasesSchema = new Schema({
    keyfile : String,
    eventDatetime: Date,
    eventDate:Date,
    agent :{
        name : String,
        identification: String,
        gender:String,
        
    },
    phrases:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

//const model = mongoose.model('Phrases', asesoresSchema);
const phrasesSerFinanzaModel = SerFinanzaConn.model('Phrases', phrasesSchema);
const phrasesBancoColombiaModel = BancolombiaConn.model('Phrases', phrasesSchema);
const phrasesEnelChileModel = EnelChileConn.model('Phrases', phrasesSchema);
const phrasesIgsBanorteMXModel = IgsBanorteMXConn.model('Phrases', phrasesSchema);
const phrasesIgsBanistmoPAModel = IgsBanistmoPAConn.model('Phrases', phrasesSchema);
const phrasesBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Phrases', phrasesSchema);
const phrasesBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Phrases', phrasesSchema);
const phrasesBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Phrases', phrasesSchema);
const phrasesDaviplataCOModel = IgsDaviplataCOConn.model('Phrases', phrasesSchema);


module.exports = {
    phrasesDaviplataCOModel,
    phrasesBpogsBoldFrenchFRModel,
    phrasesSerFinanzaModel,
    phrasesBancoColombiaModel,
    phrasesEnelChileModel,
    phrasesIgsBanorteMXModel,
    phrasesIgsBanistmoPAModel,
    phrasesBpogsBoldEnglishUSModel,
    phrasesBpogsHitesDespachoRetrioCOModel
};
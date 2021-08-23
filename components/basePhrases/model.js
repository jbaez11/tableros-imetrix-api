const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn } = require('../../db');
const Schema = mongoose.Schema;

const basePhrasesSchema = new Schema({
    phrase :{
        type: String,
        unique:true
    },
    
    category: String,
    module: String,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },

}, 
{
    versionKey: false,
});

//const model = mongoose.model('Basephrases', basePhrasesSchema);
const basePhrasesSerFinanzaModel = SerFinanzaConn.model('Basephrases', basePhrasesSchema);
const basePhrasesBancoColombiaModel = BancolombiaConn.model('Basephrases', basePhrasesSchema);
const basePhrasesEnelChileModel = EnelChileConn.model('Basephrases', basePhrasesSchema);
const basePhrasesIgsBanorteMXModel = IgsBanorteMXConn.model('Basephrases', basePhrasesSchema);
const basePhrasesIgsBanistmoPAModel = IgsBanistmoPAConn.model('Basephrases', basePhrasesSchema);
const basePhrasesBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Basephrases', basePhrasesSchema);
const basePhrasesBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Basephrases', basePhrasesSchema);
const basePhrasesBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Basephrases', basePhrasesSchema);
const basePhrasesDaviplataCOModel = IgsDaviplataCOConn.model('Basephrases', basePhrasesSchema);

module.exports = {
    basePhrasesDaviplataCOModel,
    basePhrasesBpogsBoldFrenchFRModel,
    basePhrasesSerFinanzaModel,
    basePhrasesBancoColombiaModel,
    basePhrasesEnelChileModel,
    basePhrasesIgsBanorteMXModel,
    basePhrasesIgsBanistmoPAModel,
    basePhrasesBpogsBoldEnglishUSModel,
    basePhrasesBpogsHitesDespachoRetrioCOModel
};

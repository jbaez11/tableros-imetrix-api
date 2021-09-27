const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,IgsColpatriaCOConn, IgsEntelCLConn,
IgsPromericaCOConn, IgsBancolombiaAMConn, IgsAlmacenesSIConn, IgsJelpitCOConn } = require('../../db');
const Schema = mongoose.Schema;

const scoringkeywordsSchema = new Schema({
    keyfile : String,
    eventDatetime: Date,
    eventDate:Date,
    agent :{
        name : String,
        identification: String,
        gender:String,
    },
    contents:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

//const model = mongoose.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsSerFinanzaModel = SerFinanzaConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBancoColombiaModel = BancolombiaConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsEnelChileModel = EnelChileConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsBanorteMXModel = IgsBanorteMXConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsBanistmoPAModel = IgsBanistmoPAConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsDaviplataCOModel = IgsDaviplataCOConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBpogsAMCCOModel = BpogsAMCCOCon.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsSufiCOModel = IgsSufiCOConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsColpatriaCOModel = IgsColpatriaCOConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsEntelCLModel = IgsEntelCLConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsPromericaCOModel = IgsPromericaCOConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsBancolombiaAMModel = IgsBancolombiaAMConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsAlmacenesSIModel = IgsAlmacenesSIConn.model('Scoringkeywords', scoringkeywordsSchema);
const scoringkeywordsIgsJelpitCOModel = IgsJelpitCOConn.model('Scoringkeywords', scoringkeywordsSchema);


module.exports = {
    scoringkeywordsDaviplataCOModel,
    scoringkeywordsBpogsBoldFrenchFRModel,
    scoringkeywordsSerFinanzaModel,
    scoringkeywordsBancoColombiaModel,
    scoringkeywordsEnelChileModel,
    scoringkeywordsIgsBanorteMXModel,
    scoringkeywordsIgsBanistmoPAModel,
    scoringkeywordsBpogsBoldEnglishUSModel,
    scoringkeywordsBpogsHitesDespachoRetrioCOModel,
    scoringkeywordsBpogsAMCCOModel,
    scoringkeywordsIgsBancoDeOccidenteCOModel,
    scoringkeywordsIgsSufiCOModel,
    scoringkeywordsBpogsHitesFinancieroCOModel,
    scoringkeywordsIgsColpatriaCOModel,
    scoringkeywordsIgsEntelCLModel,
    scoringkeywordsIgsPromericaCOModel,
    scoringkeywordsIgsBancolombiaAMModel,
    scoringkeywordsIgsAlmacenesSIModel,
    scoringkeywordsIgsJelpitCOModel

}; 
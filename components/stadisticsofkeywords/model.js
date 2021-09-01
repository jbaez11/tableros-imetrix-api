const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,  } = require('../../db');

const Schema = mongoose.Schema;

const stadisticOfKeywordsSchema = new Schema({
    eventDate:Date,
    required :{
        type:Object,
        default:{}
    },
    notAllowed
    :{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    recommendation :{
        type:Object,
        default:{}
    },
    createdAt:Date

    
});


const stadisticOfKeywordsSerFinanzaModel = SerFinanzaConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBancoColombiaModel = BancolombiaConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsEnelChileModel = EnelChileConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsIgsBanorteMXModel = IgsBanorteMXConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsIgsBanistmoPAModel = IgsBanistmoPAConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('StadisticOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsDaviplataCOModel = IgsDaviplataCOConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBpogsAMCCOModel = BpogsAMCCOCon.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsIgsSufiCOModel = IgsSufiCOConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);
const stadisticOfKeywordsBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('StadisticsOfKeywords', stadisticOfKeywordsSchema);


module.exports = {
    stadisticOfKeywordsDaviplataCOModel,
    stadisticOfKeywordsBpogsBoldFrenchFRModel,
    stadisticOfKeywordsSerFinanzaModel,
    stadisticOfKeywordsBancoColombiaModel,
    stadisticOfKeywordsEnelChileModel,
    stadisticOfKeywordsIgsBanorteMXModel,
    stadisticOfKeywordsIgsBanistmoPAModel,
    stadisticOfKeywordsBpogsBoldEnglishUSModel,
    stadisticOfKeywordsBpogsHitesDespachoRetrioCOModel,
    stadisticOfKeywordsBpogsAMCCOModel,
    stadisticOfKeywordsIgsBancoDeOccidenteCOModel,
    stadisticOfKeywordsIgsSufiCOModel,
    stadisticOfKeywordsBpogsHitesFinancieroCOModel,

};
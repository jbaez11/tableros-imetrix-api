const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,
    IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
    IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,
    IgsColpatriaCOConn,IgsEntelCLConn, IgsPromericaCOConn, IgsBancolombiaAMConn } = require('../../db');
const Schema = mongoose.Schema;

const auditkeywordstatisticsSchema = new Schema({
    eventDate:Date,
    contents:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    recordings:Number,
    createdAt:Date

    
});

const auditkeywordstatisticsSerFinanzaModel = SerFinanzaConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsBancoColombiaModel = BancolombiaConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsEnelChileModel = EnelChileConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsBanorteMXModel = IgsBanorteMXConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsBanistmoPAModel = IgsBanistmoPAConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsDaviplataCOModel = IgsDaviplataCOConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsBpogsAMCCOModel = BpogsAMCCOCon.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsSufiCOModel = IgsSufiCOConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsColpatriaCOModel = IgsColpatriaCOConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsEntelCLModel = IgsEntelCLConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsPromericaCOModel = IgsPromericaCOConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);
const auditkeywordstatisticsIgsBancolombiaAMModel = IgsBancolombiaAMConn.model('Auditkeywordstatistics', auditkeywordstatisticsSchema);


module.exports = {
    auditkeywordstatisticsIgsDaviplataCOModel,
    auditkeywordstatisticsBpogsBoldFrenchFRModel,
    auditkeywordstatisticsSerFinanzaModel,
    auditkeywordstatisticsBancoColombiaModel,
    auditkeywordstatisticsEnelChileModel,
    auditkeywordstatisticsIgsBanorteMXModel,
    auditkeywordstatisticsIgsBanistmoPAModel,
    auditkeywordstatisticsBpogsBoldEnglishUSModel,
    auditkeywordstatisticsBpogsHitesDespachoRetrioCOModel,
    auditkeywordstatisticsBpogsAMCCOModel,
    auditkeywordstatisticsIgsBancoDeOccidenteCOModel,
    auditkeywordstatisticsIgsSufiCOModel,
    auditkeywordstatisticsBpogsHitesFinancieroCOModel,
    auditkeywordstatisticsIgsColpatriaCOModel,
    auditkeywordstatisticsIgsEntelCLModel,
    auditkeywordstatisticsIgsPromericaCOModel,
    auditkeywordstatisticsIgsBancolombiaAMModel
};

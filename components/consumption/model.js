const mongoose = require('mongoose');
const Int32 = require('mongoose-int32');
const Double = require('@mongoosejs/double');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,
IgsColpatriaCOConn,IgsEntelCLConn, IgsPromericaCOConn, IgsBancolombiaAMConn, IgsAlmacenesSIConn,
    IgsJelpitCOConn
 } = require('../../db');
const Schema = mongoose.Schema;

const consumptionSchema = new Schema({
     eventDate : {
         type: Date,
     },
    
    processedFiles:{
        type: Number,
    },
    unprocessedFiles: {
        type: Number,
    },
    totalFiles: {
        type: Number,
    },
    processedMinutes: {
        type: Number,
    },
    unprocessedMinutes: {
        type: Number,
    },
    totalMinutes: {
        type: Number,
    },
    notes: {
        type: String,
    },
    yearMonthString:{
        type:String,
    },
    dayString:{
        type:String,
    },
    createdAt: { 
         type: Date, 
         
     },
});

//const model = mongoose.model('Consumptions', consumptionSchema);
const consumptionSerFinanzaModel = SerFinanzaConn.model('Consumptions', consumptionSchema);
const consumptionBancoColombiaModel = BancolombiaConn.model('Consumptions', consumptionSchema);
const consumptionEnelChileModel = EnelChileConn.model('Consumptions', consumptionSchema);
const consumptionIgsBanorteMXModel = IgsBanorteMXConn.model('Consumptions', consumptionSchema);
const consumptionIgsBanistmoPAModel = IgsBanistmoPAConn.model('Consumptions', consumptionSchema);
const consumptionBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Consumptions', consumptionSchema);
const consumptionBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Consumptions', consumptionSchema);
const consumptionBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Consumptions', consumptionSchema);
const consumptionDaviplataCOModel = IgsDaviplataCOConn.model('Consumptions', consumptionSchema);
const consumptionBpogsAMCCOModel = BpogsAMCCOCon.model('Consumptions', consumptionSchema);
const consumptionIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Consumptions', consumptionSchema);
const consumptionIgsSufiCOModel = IgsSufiCOConn.model('Consumptions', consumptionSchema);
const consumptionBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Consumptions', consumptionSchema);
const consumptionIgsColpatriaCOModel = IgsColpatriaCOConn.model('Consumptions', consumptionSchema);
const consumptionIgsEntelCLModel = IgsEntelCLConn.model('Consumptions', consumptionSchema);
const consumptionIgsPromericaCOModel = IgsPromericaCOConn.model('Consumptions', consumptionSchema);
const consumptionIgsBancolombiaAMModel = IgsBancolombiaAMConn.model('Consumptions', consumptionSchema);
const consumptionIgsAlmacenesSIModel = IgsAlmacenesSIConn.model('Consumptions', consumptionSchema);
const consumptionIgsJelpitCOModel = IgsJelpitCOConn.model('Consumptions', consumptionSchema);

module.exports = {
    consumptionDaviplataCOModel,
    consumptionBpogsBoldFrenchFRModel,
    consumptionSerFinanzaModel,
    consumptionBancoColombiaModel,
    consumptionEnelChileModel,
    consumptionIgsBanorteMXModel,
    consumptionIgsBanistmoPAModel,
    consumptionBpogsBoldEnglishUSModel,
    consumptionBpogsHitesDespachoRetrioCOModel,
    consumptionBpogsAMCCOModel,
    consumptionIgsBancoDeOccidenteCOModel,
    consumptionIgsSufiCOModel,
    consumptionBpogsHitesFinancieroCOModel,
    consumptionIgsColpatriaCOModel,
    consumptionIgsEntelCLModel,
    consumptionIgsPromericaCOModel,
    consumptionIgsBancolombiaAMModel,
    consumptionIgsAlmacenesSIModel,
    consumptionIgsJelpitCOModel
}; 
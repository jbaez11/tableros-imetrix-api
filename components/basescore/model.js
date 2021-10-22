const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
    IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn, IgsColpatriaCOConn, IgsEntelCLConn,
    IgsPromericaCOConn, IgsBancolombiaAMConn, IgsAlmacenesSIConn, IgsJelpitCOConn, IgsComfamiliarCOConn,
IgsBancoAgricolaSVConn, IgsDaviviendaCRConn} = require('../../db');

const Schema = mongoose.Schema;

const basescoreSchema = new Schema({
    infaltable:{
        type:Object,
    },
    createdAt:Date

    
});


const basescoreSerFinanzaModel = SerFinanzaConn.model('Basescores', basescoreSchema);
const basescoreBancoColombiaModel = BancolombiaConn.model('Basescores', basescoreSchema);
const basescoreEnelChileModel = EnelChileConn.model('Basescores', basescoreSchema);
const basescoreIgsBanorteMXModel = IgsBanorteMXConn.model('Basescores', basescoreSchema);
const basescoreIgsBanistmoPAModel = IgsBanistmoPAConn.model('Basescores', basescoreSchema);
const basescoreBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Basescores', basescoreSchema);
const basescoreBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Basescores', basescoreSchema);
const basescoreBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Basescores', basescoreSchema);
const basescoreDaviplataCOModel = IgsDaviplataCOConn.model('Basescores', basescoreSchema);
const basescoreBpogsAMCCOModel = BpogsAMCCOCon.model('Basescores', basescoreSchema);
const basescoreIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Basescores', basescoreSchema);
const basescoreIgsSufiCOModel = IgsSufiCOConn.model('Basescores', basescoreSchema);
const basescoreBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Basescores', basescoreSchema);
const basescoreIgsColpatriaCOModel = IgsColpatriaCOConn.model('Basescores', basescoreSchema);
const basescoreIgsEntelCLModel = IgsEntelCLConn.model('Basescores', basescoreSchema);
const basescoreIgsPromericaCOModel = IgsPromericaCOConn.model('Basescores', basescoreSchema);
const basescoreIgsBancolombiaAMModel = IgsBancolombiaAMConn.model('Basescores', basescoreSchema);
const basescoreIgsAlmacenesSIModel = IgsAlmacenesSIConn.model('Basescores', basescoreSchema);
const basescoreIgsJelpitCOModel = IgsJelpitCOConn.model('Basescores', basescoreSchema);
const basescoreIgsComfamiliarCO = IgsComfamiliarCOConn.model('Basescores', basescoreSchema);
const basescoreIgsBancoAgricolaSVModel = IgsBancoAgricolaSVConn.model('Basescores', basescoreSchema);
const basescoreIgsDaviviendaCRModel = IgsDaviviendaCRConn.model('Basescores', basescoreSchema);

module.exports = {
    basescoreDaviplataCOModel,
    basescoreBpogsBoldFrenchFRModel,
    basescoreSerFinanzaModel,
    basescoreBancoColombiaModel,
    basescoreEnelChileModel,
    basescoreIgsBanorteMXModel,
    basescoreIgsBanistmoPAModel,
    basescoreBpogsBoldEnglishUSModel,
    basescoreBpogsHitesDespachoRetrioCOModel,
    basescoreBpogsAMCCOModel,
    basescoreIgsBancoDeOccidenteCOModel,
    basescoreIgsSufiCOModel,
    basescoreBpogsHitesFinancieroCOModel,
    basescoreIgsColpatriaCOModel,
    basescoreIgsEntelCLModel,
    basescoreIgsPromericaCOModel,
    basescoreIgsBancolombiaAMModel,
    basescoreIgsAlmacenesSIModel,
    basescoreIgsJelpitCOModel,
    basescoreIgsComfamiliarCO,
    basescoreIgsBancoAgricolaSVModel,
    basescoreIgsDaviviendaCRModel
};
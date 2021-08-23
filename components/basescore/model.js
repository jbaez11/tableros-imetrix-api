const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
    IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn, IgsColpatriaCOConn, IgsEntelCLConn,
    IgsPromericaCOConn} = require('../../db');

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
    basescoreIgsPromericaCOModel
};
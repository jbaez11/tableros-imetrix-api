const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,
IgsColpatriaCOConn, IgsEntelCLConn, IgsPromericaCOConn, IgsBancolombiaAMConn, IgsAlmacenesSIConn, 
IgsJelpitCOConn, IgsComfamiliarCOConn, IgsBancoAgricolaSVConn, IgsDaviviendaCRConn } = require('../../db');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    eventDate:Date,
    agentsSummary :{
        type:Object,
        default:{}
    },
    recordingsSummary:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

//const model = mongoose.model('Auditscoringkeywords', scoreSchema);
const scoreSerFinanzaModel = SerFinanzaConn.model('Auditscoringkeywords', scoreSchema);
const scoreBancoColombiaModel = BancolombiaConn.model('Auditscoringkeywords', scoreSchema);
const scoreEnelChileModel = EnelChileConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsBanorteMXModel = IgsBanorteMXConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsBanistmoPAModel = IgsBanistmoPAConn.model('Auditscoringkeywords', scoreSchema);
const scoreBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Auditscoringkeywords', scoreSchema);
const scoreBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Auditscoringkeywords', scoreSchema);
const scoreDaviplataCOModel = IgsDaviplataCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreBpogsAMCCOModel = BpogsAMCCOCon.model('Auditscoringkeywords', scoreSchema);
const scoreIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsSufiCOModel = IgsSufiCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsColpatriaCOModel = IgsColpatriaCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsEntelCLModel = IgsEntelCLConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsPromericaCOModel = IgsPromericaCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsBancolombiaAMModel = IgsBancolombiaAMConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsAlmacenesSIModel = IgsAlmacenesSIConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsJelpitCOModel = IgsJelpitCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsComfamiliarCOModel = IgsComfamiliarCOConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsBancoAgricolaSVModel = IgsBancoAgricolaSVConn.model('Auditscoringkeywords', scoreSchema);
const scoreIgsDaviviendaCRModel = IgsDaviviendaCRConn.model('Auditscoringkeywords', scoreSchema);

module.exports = {
    scoreDaviplataCOModel,
    scoreBpogsBoldFrenchFRModel,
    scoreSerFinanzaModel,
    scoreBancoColombiaModel,
    scoreEnelChileModel,
    scoreIgsBanorteMXModel,
    scoreIgsBanistmoPAModel,
    scoreBpogsBoldEnglishUSModel,
    scoreBpogsHitesDespachoRetrioCOModel,
    scoreBpogsAMCCOModel,
    scoreIgsBancoDeOccidenteCOModel,
    scoreIgsSufiCOModel,
    scoreBpogsHitesFinancieroCOModel,
    scoreIgsColpatriaCOModel,
    scoreIgsEntelCLModel,
    scoreIgsPromericaCOModel,
    scoreIgsBancolombiaAMModel,
    scoreIgsAlmacenesSIModel,
    scoreIgsJelpitCOModel,
    scoreIgsComfamiliarCOModel,
    scoreIgsBancoAgricolaSVModel,
    scoreIgsDaviviendaCRModel
}; 
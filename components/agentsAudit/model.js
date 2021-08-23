const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,IgsColpatriaCOConn, IgsEntelCLConn,
IgsPromericaCOConn } = require('../../db');

const Schema = mongoose.Schema;

const agentsAuditSchema = new Schema({
    eventDate:Date,
    agentsSummary :{
        type:Object,
        default:{}
    },
    recordingsSummary
    :{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});


const agentsAuditSerFinanzaModel = SerFinanzaConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBancoColombiaModel = BancolombiaConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditEnelChileModel = EnelChileConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsBanorteMXModel = IgsBanorteMXConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsBanistmoPAModel = IgsBanistmoPAConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsDaviplataCOModel = IgsDaviplataCOConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBpogsAMCCOModel = BpogsAMCCOCon.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsSufiCOModel = IgsSufiCOConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsColpatriaCOModel = IgsColpatriaCOConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsEntelCLModel = IgsEntelCLConn.model('Auditkeywords', agentsAuditSchema);
const agentsAuditIgsPromericaCOModel = IgsPromericaCOConn.model('Auditkeywords', agentsAuditSchema);

module.exports = {
    agentsAuditIgsDaviplataCOModel,
    agentsAuditSerFinanzaModel,
    agentsAuditBancoColombiaModel,
    agentsAuditEnelChileModel,
    agentsAuditIgsBanorteMXModel,
    agentsAuditIgsBanistmoPAModel,
    agentsAuditBpogsBoldEnglishUSModel,
    agentsAuditBpogsHitesDespachoRetrioCOModel,
    agentsAuditBpogsBoldFrenchFRModel,
    agentsAuditBpogsAMCCOModel,
    agentsAuditIgsBancoDeOccidenteCOModel,
    agentsAuditIgsSufiCOModel,
    agentsAuditBpogsHitesFinancieroCOModel,
    agentsAuditIgsColpatriaCOModel,
    agentsAuditIgsEntelCLModel,
    agentsAuditIgsPromericaCOModel

};
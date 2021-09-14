const mongoose = require('mongoose');
const { IgsDaviplataCOConn,SerFinanzaConn, BancolombiaConn, 
    EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn, BpogsAMCCOCon,
    IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,IgsColpatriaCOConn,
    IgsEntelCLConn,IgsPromericaCOConn,IgsBancolombiaAMConn,IgsAlmacenesSIConn } = require('../../db');

const Schema = mongoose.Schema;

const agentsSchema = new Schema({
    name : {
        type: String,
        required:true,
        uppercase: true,
    },
    
    identification:{
        type: String,
        unique:true,
        required:true,
    },
    gender: {
        type: String,
        required:true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
}, 
{
    versionKey: false,
});

//const model = mongoose.model('BaseAgents', agentsSchema);
const agentsSerFinanzaModel = SerFinanzaConn.model('BaseAgents', agentsSchema);
const agentsBancoColombiaModel = BancolombiaConn.model('BaseAgents', agentsSchema);
const agentsEnelChileModel = EnelChileConn.model('BaseAgents', agentsSchema);
const agentsIgsBanorteMXModel = IgsBanorteMXConn.model('BaseAgents', agentsSchema);
const agentsIgsBanistmoPAModel = IgsBanistmoPAConn.model('BaseAgents', agentsSchema);
const agentsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('BaseAgents', agentsSchema);
const agentsBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('BaseAgents', agentsSchema);
const agentsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('BaseAgents', agentsSchema);
const agentsDaviplataCOModel = IgsDaviplataCOConn.model('BaseAgents', agentsSchema);
const agentsBpogsAMCCOModel = BpogsAMCCOCon.model('Baseagents', agentsSchema );
const agentsIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Baseagents', agentsSchema );
const agentsIgsSufiCOModel = IgsSufiCOConn.model('Baseagents', agentsSchema );
const agentsBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Baseagents', agentsSchema );
const agentsIgsColpatriaCOModel = IgsColpatriaCOConn.model('Baseagents', agentsSchema );
const agentsIgsEntelCLModel = IgsEntelCLConn.model('Baseagents', agentsSchema );
const agentsIgsPromericaCOModel = IgsPromericaCOConn.model('Baseagents', agentsSchema );
const agentsIgsBancolombiaAMModel = IgsBancolombiaAMConn.model('Baseagents', agentsSchema );
const agentsIgsAlmacenesSIModel = IgsAlmacenesSIConn.model('Baseagents', agentsSchema );

module.exports = {
    agentsSerFinanzaModel,agentsBancoColombiaModel,agentsEnelChileModel,
    agentsIgsBanorteMXModel,agentsIgsBanistmoPAModel,
    agentsBpogsBoldEnglishUSModel,
    agentsBpogsHitesDespachoRetrioCOModel,agentsBpogsBoldFrenchFRModel,
    agentsDaviplataCOModel,agentsBpogsAMCCOModel,agentsIgsBancoDeOccidenteCOModel,
    agentsIgsSufiCOModel,agentsBpogsHitesFinancieroCOModel,agentsIgsColpatriaCOModel,
    agentsIgsEntelCLModel,agentsIgsPromericaCOModel,
    agentsIgsBancolombiaAMModel,agentsIgsAlmacenesSIModel
};

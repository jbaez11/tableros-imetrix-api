const mongoose = require('mongoose');
const { IgsDaviplataCOConn,SerFinanzaConn, BancolombiaConn, 
    EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn, BpogsAMCCOCon,
    IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,IgsColpatriaCOConn } = require('../../db');

const Schema = mongoose.Schema;

const modulesSchema = new Schema({
    nameCategory : {
        type: String,
        required:true,
        
    },
    nameModule : {
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
const modulesSerFinanzaModel = SerFinanzaConn.model('Modules', modulesSchema);
const modulesBancoColombiaModel = BancolombiaConn.model('Modules', modulesSchema);
const modulesEnelChileModel = EnelChileConn.model('Modules', modulesSchema);
const modulesIgsBanorteMXModel = IgsBanorteMXConn.model('Modules', modulesSchema);
const modulesIgsBanistmoPAModel = IgsBanistmoPAConn.model('Modules', modulesSchema);
const modulesBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Modules', modulesSchema);
const modulesBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Modules', modulesSchema);
const modulesBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Modules', modulesSchema);
const modulesDaviplataCOModel = IgsDaviplataCOConn.model('Modules', modulesSchema);
const modulesBpogsAMCCOModel = BpogsAMCCOCon.model('Modules', modulesSchema );
const modulesIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Modules', modulesSchema );
const modulesIgsSufiCOModel = IgsSufiCOConn.model('Modules', modulesSchema );
const modulesBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Modules', modulesSchema );
const modulesIgsColpatriaCOModel = IgsColpatriaCOConn.model('Modules', modulesSchema );

module.exports = {
    modulesSerFinanzaModel,modulesBancoColombiaModel,modulesEnelChileModel,
    modulesIgsBanorteMXModel,modulesIgsBanistmoPAModel,
    modulesBpogsBoldEnglishUSModel,
    modulesBpogsHitesDespachoRetrioCOModel,modulesBpogsBoldFrenchFRModel,
    modulesDaviplataCOModel,modulesBpogsAMCCOModel,modulesIgsBancoDeOccidenteCOModel,
    modulesIgsSufiCOModel,modulesBpogsHitesFinancieroCOModel,
    modulesIgsColpatriaCOModel
};

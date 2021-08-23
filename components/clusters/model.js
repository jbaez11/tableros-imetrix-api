const mongoose = require('mongoose');
const { IgsDaviplataCOConn,SerFinanzaConn, BancolombiaConn, 
    EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn, BpogsAMCCOCon,
    IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn } = require('../../db');

const Schema = mongoose.Schema;

const clustersSchema = new Schema({
    nameCategory : {
        type: Schema.ObjectId,
        ref : 'basecategories'
        
    },
    nameModule : {
        type: String,
        required:true,
        
    },
    nameClusters : {
        type: String,
        required:true,
        
    },
    puntaje:{
        type:Number,
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
const clustersSerFinanzaModel = SerFinanzaConn.model('Clusters', clustersSchema);
const clustersBancoColombiaModel = BancolombiaConn.model('Clusters', clustersSchema);
const clustersEnelChileModel = EnelChileConn.model('Clusters', clustersSchema);
const clustersIgsBanorteMXModel = IgsBanorteMXConn.model('Clusters', clustersSchema);
const clustersIgsBanistmoPAModel = IgsBanistmoPAConn.model('Clusters', clustersSchema);
const clustersBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Clusters', clustersSchema);
const clustersBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Clusters', clustersSchema);
const clustersBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Clusters', clustersSchema);
const clustersDaviplataCOModel = IgsDaviplataCOConn.model('Clusters', clustersSchema);
const clustersBpogsAMCCOModel = BpogsAMCCOCon.model('Clusters', clustersSchema );
const clustersIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Clusters', clustersSchema );
const clustersIgsSufiCOModel = IgsSufiCOConn.model('Clusters', clustersSchema );
const clustersBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Clusters', clustersSchema );

module.exports = {
    clustersSerFinanzaModel,clustersBancoColombiaModel,clustersEnelChileModel,
    clustersIgsBanorteMXModel,clustersIgsBanistmoPAModel,
    clustersBpogsBoldEnglishUSModel,
    clustersBpogsHitesDespachoRetrioCOModel,clustersBpogsBoldFrenchFRModel,
    clustersDaviplataCOModel,clustersBpogsAMCCOModel,clustersIgsBancoDeOccidenteCOModel,
    clustersIgsSufiCOModel,clustersBpogsHitesFinancieroCOModel
};

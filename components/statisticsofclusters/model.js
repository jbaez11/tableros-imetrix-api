const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,
IgsColpatriaCOConn, IgsEntelCLConn, IgsPromericaCOConn, IgsBancolombiaAMConn, IgsAlmacenesSIConn  } = require('../../db');

const Schema = mongoose.Schema;

const statisticsOfClustersSchema = new Schema({
    eventDate:Date,
    
    contents
    :{
        // aqui indicas que el tipo de dato es Object
        type: Object,
        // aqui lo inicializas por defecto como un Object vacío
        default: {}
    },
    createdAt:Date

    
});


const statisticsOfClustersSerFinanzaModel = SerFinanzaConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersBancoColombiaModel = BancolombiaConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersEnelChileModel = EnelChileConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsBanorteMXModel = IgsBanorteMXConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsBanistmoPAModel = IgsBanistmoPAConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsDaviplataCOModel = IgsDaviplataCOConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersBpogsAMCCOModel = BpogsAMCCOCon.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsSufiCOModel = IgsSufiCOConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsColpatriaCOModel = IgsColpatriaCOConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsEntelCLModel = IgsEntelCLConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsPromericaCOModel = IgsPromericaCOConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsBancolombiaAMModel = IgsBancolombiaAMConn.model('Statisticsofclusters', statisticsOfClustersSchema);
const statisticsOfClustersIgsAlmacenesSIModel = IgsAlmacenesSIConn.model('Statisticsofclusters', statisticsOfClustersSchema);

module.exports = {
    statisticsOfClustersIgsDaviplataCOModel,
    statisticsOfClustersSerFinanzaModel,
    statisticsOfClustersBancoColombiaModel,
    statisticsOfClustersEnelChileModel,
    statisticsOfClustersIgsBanorteMXModel,
    statisticsOfClustersIgsBanistmoPAModel,
    statisticsOfClustersBpogsBoldEnglishUSModel,
    statisticsOfClustersBpogsHitesDespachoRetrioCOModel,
    statisticsOfClustersBpogsBoldFrenchFRModel,
    statisticsOfClustersBpogsAMCCOModel,
    statisticsOfClustersIgsBancoDeOccidenteCOModel,
    statisticsOfClustersIgsSufiCOModel,
    statisticsOfClustersBpogsHitesFinancieroCOModel,
    statisticsOfClustersIgsColpatriaCOModel,
    statisticsOfClustersIgsEntelCLModel,
    statisticsOfClustersIgsPromericaCOModel,
    statisticsOfClustersIgsBancolombiaAMModel,
    statisticsOfClustersIgsAlmacenesSIModel

};
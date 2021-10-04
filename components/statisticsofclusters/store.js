const {statisticsOfClustersSerFinanzaModel,
    statisticsOfClustersBancoColombiaModel,
    statisticsOfClustersEnelChileModel,
    statisticsOfClustersIgsBanorteMXModel,
    statisticsOfClustersIgsBanistmoPAModel,
    statisticsOfClustersBpogsBoldEnglishUSModel,
    statisticsOfClustersBpogsHitesDespachoRetrioCOModel,
    statisticsOfClustersBpogsBoldFrenchFRModel,
    statisticsOfClustersIgsDaviplataCOModel,statisticsOfClustersBpogsAMCCOModel,
    statisticsOfClustersIgsBancoDeOccidenteCOModel,
    statisticsOfClustersIgsSufiCOModel,
    statisticsOfClustersBpogsHitesFinancieroCOModel,
    statisticsOfClustersIgsColpatriaCOModel,
    statisticsOfClustersIgsEntelCLModel,
    statisticsOfClustersIgsPromericaCOModel,
    statisticsOfClustersIgsBancolombiaAMModel,
    statisticsOfClustersIgsAlmacenesSIModel,
    statisticsOfClustersIgsJelpitCOModel,
    statisticsOfClustersIgsComfamiliarCOModel} = require('./model');


async function getstatisticsOfClusters(filterstatisticsOfClusters,nameDB){
    let filter = {};
    console.log('filtro fc',filterstatisticsOfClusters)
    //console.log('filtro 0 ',filterAgentsAudit[0],' y filtro 1 ',filterAgentsAudit[1])
    if(filterstatisticsOfClusters != null){
        if(filterstatisticsOfClusters[0] == 2 && filterstatisticsOfClusters[1]==0){
            filter = {
                eventDate:filterstatisticsOfClusters
            };
        }else{
            if(filterstatisticsOfClusters[0]>filterstatisticsOfClusters[1]){
               filterstatisticsOfClusters.sort();
            }
            filter = {
                
              eventDate:{$gte:[filterstatisticsOfClusters[0]],$lte:[filterstatisticsOfClusters[1]]}
               
            };
        }
        
    }

    var statisticsOfClusters ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            statisticsOfClusters = await statisticsOfClustersSerFinanzaModel.find(filter);
            return statisticsOfClusters;

        case 'igsBancolombiaCO':
            statisticsOfClusters = await statisticsOfClustersBancoColombiaModel.find(filter);
            return statisticsOfClusters ;

        case 'igsEnelCL':
            statisticsOfClusters = await statisticsOfClustersEnelChileModel.find(filter);
            return statisticsOfClusters;
        case 'igsBanorteMX' :
            statisticsOfClusters = await statisticsOfClustersIgsBanorteMXModel.find(filter);
            return statisticsOfClusters;
        case 'igsBanistmoPA' :
            statisticsOfClusters = await statisticsOfClustersIgsBanistmoPAModel.find(filter);
            return statisticsOfClusters;
        case 'bpogsBoldEnglishUS' :
            statisticsOfClusters = await statisticsOfClustersBpogsBoldEnglishUSModel.find(filter);
            return statisticsOfClusters;
        case 'bpogsHitesDespachoRetiroCO' :
            statisticsOfClusters = await statisticsOfClustersBpogsHitesDespachoRetrioCOModel.find(filter);
            return statisticsOfClusters;
        case 'bpogsBoldFrenchFR' :
            statisticsOfClusters = await statisticsOfClustersBpogsBoldFrenchFRModel.find(filter);
            return statisticsOfClusters;
        case 'igsDaviplataCO' :
                statisticsOfClusters = await statisticsOfClustersIgsDaviplataCOModel.find(filter);
                return statisticsOfClusters;
        case 'igsDaviplataCO' :
                statisticsOfClusters = await statisticsOfClustersIgsDaviplataCOModel.find(filter);
                return statisticsOfClusters;
        case 'bpogsAMCCO' :
                statisticsOfClusters = await statisticsOfClustersBpogsAMCCOModel.find(filter);
                return statisticsOfClusters;
        case 'igsBancoDeOccidenteCO' :
                statisticsOfClusters = await statisticsOfClustersIgsBancoDeOccidenteCOModel.find(filter);
                return statisticsOfClusters;
        case 'igsSufiCO' :
                statisticsOfClusters = await statisticsOfClustersIgsSufiCOModel.find(filter);
                return statisticsOfClusters;
        case 'bpogsHitesFinancieroCO' :
                statisticsOfClusters = await statisticsOfClustersBpogsHitesFinancieroCOModel.find(filter);
                return statisticsOfClusters;
        case 'igsColpatriaCO' :
                statisticsOfClusters = await statisticsOfClustersIgsColpatriaCOModel.find(filter);
                return statisticsOfClusters;
        case 'igsEntelCL' :
                statisticsOfClusters = await statisticsOfClustersIgsEntelCLModel.find(filter);
                return statisticsOfClusters;
        case 'igsPromericaCO' :
                statisticsOfClusters = await statisticsOfClustersIgsPromericaCOModel.find(filter);
                return statisticsOfClusters;
                
        case 'igsBancolombiaAM' :
                statisticsOfClusters = await statisticsOfClustersIgsBancolombiaAMModel.find(filter);
                return statisticsOfClusters;
               
        case 'igsAlmacenesSI' :
                statisticsOfClusters = await statisticsOfClustersIgsAlmacenesSIModel.find(filter);
                return statisticsOfClusters;
        case 'igsJelpitCO' :
                statisticsOfClusters = await statisticsOfClustersIgsJelpitCOModel.find(filter);
                return statisticsOfClusters;
        case 'igsComfamiliarCO' :
                statisticsOfClusters = await statisticsOfClustersIgsComfamiliarCOModel.find(filter);
                return statisticsOfClusters;
                       
        }
    //return asesores;
}

module.exports = {
    list:getstatisticsOfClusters,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}


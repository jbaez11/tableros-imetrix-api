const {consumptionSerFinanzaModel,
    consumptionBancoColombiaModel,
    consumptionEnelChileModel,
    consumptionIgsBanorteMXModel,
    consumptionIgsBanistmoPAModel,
    consumptionBpogsBoldEnglishUSModel,
    consumptionBpogsHitesDespachoRetrioCOModel,
    consumptionBpogsBoldFrenchFRModel,
    consumptionDaviplataCOModel,
    consumptionBpogsAMCCOModel,
    consumptionIgsBancoDeOccidenteCOModel,
    consumptionIgsSufiCOModel,
    consumptionBpogsHitesFinancieroCOModel,
    consumptionIgsColpatriaCOModel,
    consumptionIgsEntelCLModel,
    consumptionIgsPromericaCOModel,
    consumptionIgsBancolombiaAMModel,
    consumptionIgsAlmacenesSIModel
} = require('./model');
 
async function getConsumption(filterConsumption,nameDB){
    let filter = {};
    
    if(filterConsumption != null){
        filter = {
            yearMonthString:filterConsumption
        };
    }
    var consumption ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            consumption = await consumptionSerFinanzaModel.find(filter);
            return consumption;

        case 'igsBancolombiaCO':
            consumption = await consumptionBancoColombiaModel.find(filter);
            return consumption ;

        case 'igsEnelCL':
            consumption = await consumptionEnelChileModel.find(filter);
            return consumption;
        case 'igsBanorteMX' :
            consumption = await consumptionIgsBanorteMXModel.find(filter);
            return consumption;
        case 'igsBanistmoPA' :
            consumption = await consumptionIgsBanistmoPAModel.find(filter);
            return consumption;
        case 'bpogsBoldEnglishUS' :
            consumption = await consumptionBpogsBoldEnglishUSModel.find(filter);
            return consumption;
        case 'bpogsHitesDespachoRetiroCO' :
            consumption = await consumptionBpogsHitesDespachoRetrioCOModel.find(filter);
            return consumption; 
        case 'bpogsBoldFrenchFR' :
            consumption = await consumptionBpogsBoldFrenchFRModel.find(filter);
            return consumption;
        case 'igsDaviplataCO' :
            consumption = await consumptionDaviplataCOModel.find(filter);
            return consumption;
        case 'bpogsAMCCO' :
            consumption = await consumptionBpogsAMCCOModel.find(filter);
            return consumption;
        case 'igsBancoDeOccidenteCO' :
            consumption = await consumptionIgsBancoDeOccidenteCOModel.find(filter);
            return consumption;
            
        case 'igsSufiCO' :
            consumption = await consumptionIgsSufiCOModel.find(filter);
            return consumption;
        case 'bpogsHitesFinancieroCO' :
            consumption = await consumptionBpogsHitesFinancieroCOModel.find(filter);
            return consumption;
        case 'igsColpatriaCO' :
            consumption = await consumptionIgsColpatriaCOModel.find(filter);
            return consumption;
        case 'igsEntelCL' :
            consumption = await consumptionIgsEntelCLModel.find(filter);
            return consumption;
        case 'igsPromericaCO' :
            consumption = await consumptionIgsPromericaCOModel.find(filter);
            return consumption;
        case 'igsBancolombiaAM' :
            consumption = await consumptionIgsBancolombiaAMModel.find(filter);
            return consumption;
        case 'igsAlmacenesSI' :
            consumption = await consumptionIgsAlmacenesSIModel.find(filter);
            return consumption;        
             
        }
}
 
module.exports = {
    list:getConsumption,
    
}
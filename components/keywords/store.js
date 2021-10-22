
const {keywordsSerFinanzaModel,
    keywordsBancoColombiaModel,
    keywordsEnelChileModel,
    keywordsIgsBanorteMXModel,
    keywordsIgsBanistmoPAModel,
    keywordsBpogsBoldEnglishUSModel,
    keywordsBpogsHitesDespachoRetrioCOModel,
    keywordsBpogsBoldFrenchFRModel,
    keywordsDaviplataCOModel,
    keywordsBpogsAMCCOModel,
    keywordsIgsBancoDeOccidenteCOModel,
    keywordsIgsSufiCOModel,
    keywordsBpogsHitesFinancieroCOModel,
    keywordsIgsColpatriaCOModel,
    keywordsIgsEntelCLModel,
    keywordsIgsPromericaCOModel,
    keywordsIgsBancolombiaAMModel,
    keywordsIgsAlmacenesSIModel,
    keywordsIgsJelpitCOModel,
    keywordsIgsComfamiliarCOModel,
    keywordsIgsBancoAgricolaSVModel,
    keywordsIgsDaviviendaCRModel} = require('./model');

async function getAsesores(filterAgentsAudit,nameDB){
    let filter = {};
    
    if(filterAgentsAudit != null){
        filter = {
            keyfile:filterAgentsAudit
        };
    }
    var keywords ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            keywords = await keywordsSerFinanzaModel.find(filter);
            return keywords;

        case 'igsBancolombiaCO':
            keywords = await keywordsBancoColombiaModel.find(filter);
            return keywords ;

        case 'igsEnelCL':
            keywords = await keywordsEnelChileModel.find(filter);
            return keywords;
        case 'igsBanorteMX' :
            keywords = await keywordsIgsBanorteMXModel.find(filter);
            return keywords;
        case 'igsBanistmoPA' :
            keywords = await keywordsIgsBanistmoPAModel.find(filter);
            return keywords;
        case 'bpogsBoldEnglishUS' :
            keywords = await keywordsBpogsBoldEnglishUSModel.find(filter);
            return keywords;
        case 'bpogsHitesDespachoRetiroCO' :
            keywords = await keywordsBpogsHitesDespachoRetrioCOModel.find(filter);
            return keywords; 
        case 'bpogsBoldFrenchFR' :
            keywords = await keywordsBpogsBoldFrenchFRModel.find(filter);
            return keywords;
        case 'igsDaviplataCO' :
            keywords = await keywordsDaviplataCOModel.find(filter);
            return keywords;
        case 'bpogsAMCCO' :
            keywords = await keywordsBpogsAMCCOModel.find(filter);
            return keywords;
        case 'igsBancoDeOccidenteCO' :
            keywords = await keywordsIgsBancoDeOccidenteCOModel.find(filter);
            return keywords;
        case 'igsSufiCO' :
                keywords = await keywordsIgsSufiCOModel.find(filter);
                return keywords;
        case 'bpogsHitesFinancieroCO' :
                keywords = await keywordsBpogsHitesFinancieroCOModel.find(filter);
                return keywords;
                
        case 'igsColpatriaCO' :
                keywords = await keywordsIgsColpatriaCOModel.find(filter);
                return keywords;
        case 'igsEntelCL' :
                keywords = await keywordsIgsEntelCLModel.find(filter);
                return keywords;
        case 'igsPromericaCO' :
                keywords = await keywordsIgsPromericaCOModel.find(filter);
                return keywords;
                
        case 'igsBancolombiaAM' :
                keywords = await keywordsIgsBancolombiaAMModel.find(filter);
                return keywords;
        case 'igsAlmacenesSI' :
                keywords = await keywordsIgsAlmacenesSIModel.find(filter);
                return keywords;
        case 'igsJelpitCO' :
                keywords = await keywordsIgsJelpitCOModel.find(filter);
                return keywords;
        case 'igsComfamiliarCO' :
                keywords = await keywordsIgsComfamiliarCOModel.find(filter);
                return keywords;

        case 'igsBancoAgricolaSV' :
                keywords = await keywordsIgsBancoAgricolaSVModel.find(filter);
                return keywords;
        case 'igsDaviviendaCR' :
                keywords = await keywordsIgsDaviviendaCRModel.find(filter);
                return keywords;
                       
        }
        
}

module.exports = {
    list:getAsesores,
    
}


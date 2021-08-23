const {stadisticOfKeywordsSerFinanzaModel,
    stadisticOfKeywordsBancoColombiaModel,
    stadisticOfKeywordsEnelChileModel,
    stadisticOfKeywordsIgsBanorteMXModel,
    stadisticOfKeywordsIgsBanistmoPAModel,
    stadisticOfKeywordsBpogsBoldEnglishUSModel,
    stadisticOfKeywordsBpogsHitesDespachoRetrioCOModel,
    stadisticOfKeywordsBpogsBoldFrenchFRModel,
    stadisticOfKeywordsDaviplataCOModel,
    stadisticOfKeywordsBpogsAMCCOModel,
    stadisticOfKeywordsIgsBancoDeOccidenteCOModel,
    stadisticOfKeywordsIgsSufiCOModel,
    stadisticOfKeywordsBpogsHitesFinancieroCOModel,} = require('./model');


async function getStadisticOfKeywords(filterStadisticOfKeywords,nameDB){
    let filter = {};
    console.log('filtro fc',filterStadisticOfKeywords)
    if(filterStadisticOfKeywords != null){
        
        if(filterStadisticOfKeywords[0] == 2 && filterStadisticOfKeywords[1]==0){
            filter = {
                eventDate:filterStadisticOfKeywords
            };
        }else{
            if(filterStadisticOfKeywords[0]>filterStadisticOfKeywords[1]){
                filterStadisticOfKeywords.sort();
            }
            filter = {
                
              eventDate:{$gte:[filterStadisticOfKeywords[0]],$lte:[filterStadisticOfKeywords[1]]}
               
            };
        }
        
    }

    var stadisticOfKeywords ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            stadisticOfKeywords = await stadisticOfKeywordsSerFinanzaModel.find(filter);
            return stadisticOfKeywords;

        case 'igsBancolombiaCO':
            stadisticOfKeywords = await stadisticOfKeywordsBancoColombiaModel.find(filter);
            return stadisticOfKeywords ;

        case 'igsEnelCL':
            stadisticOfKeywords = await stadisticOfKeywordsEnelChileModel.find(filter);
            return stadisticOfKeywords;
        case 'igsBanorteMX' :
            stadisticOfKeywords = await stadisticOfKeywordsIgsBanorteMXModel.find(filter);
            return stadisticOfKeywords;
        case 'igsBanistmoPA' :
            stadisticOfKeywords = await stadisticOfKeywordsIgsBanistmoPAModel.find(filter);
            return stadisticOfKeywords;
        case 'bpogsBoldEnglishUS' :
            stadisticOfKeywords = await stadisticOfKeywordsBpogsBoldEnglishUSModel.find(filter);
            return stadisticOfKeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            stadisticOfKeywords = await stadisticOfKeywordsBpogsHitesDespachoRetrioCOModel.find(filter);
            return stadisticOfKeywords;  
        case 'bpogsBoldFrenchFR' :
            stadisticOfKeywords = await stadisticOfKeywordsBpogsBoldFrenchFRModel.find(filter);
            return stadisticOfKeywords;
        case 'igsDaviplataCO' :
            stadisticOfKeywords = await stadisticOfKeywordsDaviplataCOModel.find(filter);
            return stadisticOfKeywords;
        case 'bpogsAMCCO' :
            stadisticOfKeywords = await stadisticOfKeywordsBpogsAMCCOModel.find(filter);
            return stadisticOfKeywords;
        case 'igsBancoDeOccidenteCO' :
            stadisticOfKeywords = await stadisticOfKeywordsIgsBancoDeOccidenteCOModel.find(filter);
            return stadisticOfKeywords;
        case 'igsSufiCO' :
            stadisticOfKeywords = await stadisticOfKeywordsIgsSufiCOModel.find(filter);
            return stadisticOfKeywords;
        case 'bpogsHitesFinancieroCO' :
            stadisticOfKeywords = await stadisticOfKeywordsBpogsHitesFinancieroCOModel.find(filter);
            return stadisticOfKeywords;              
        }
        
        
        return stadisticOfKeywords;
        
}

module.exports = {
    list:getStadisticOfKeywords,
   }


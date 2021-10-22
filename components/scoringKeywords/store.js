const {scoringkeywordsSerFinanzaModel,
    scoringkeywordsBancoColombiaModel,
    scoringkeywordsEnelChileModel,
    scoringkeywordsIgsBanorteMXModel,
    scoringkeywordsIgsBanistmoPAModel,
    scoringkeywordsBpogsBoldEnglishUSModel,
    scoringkeywordsBpogsHitesDespachoRetrioCOModel,
    scoringkeywordsBpogsBoldFrenchFRModel,
    scoringkeywordsDaviplataCOModel,
    scoringkeywordsBpogsAMCCOModel,
    scoringkeywordsIgsBancoDeOccidenteCOModel,
    scoringkeywordsIgsSufiCOModel,
    scoringkeywordsBpogsHitesFinancieroCOModel,
    scoringkeywordsIgsColpatriaCOModel,
    scoringkeywordsIgsEntelCLModel,
    scoringkeywordsIgsPromericaCOModel,
    scoringkeywordsIgsBancolombiaAMModel,
    scoringkeywordsIgsAlmacenesSIModel,
    scoringkeywordsIgsJelpitCOModel,
    scoringkeywordsIgsComfamiliarCOModel,
    scoringkeywordsIgsBancoAgricolaSVModel,
    scoringkeywordsIgsDaviviendaCRModel} = require('./model');

async function getScoringkeywords(filterScoringKeywords,nameDB){
    let filter = {};
    
    if(filterScoringKeywords != null){
        
            filter = {
                keyfile:filterScoringKeywords
               
            };
        
        
    }
    var scoringkeywords ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            scoringkeywords = await scoringkeywordsSerFinanzaModel.find(filter);
            return scoringkeywords;

        case 'igsBancolombiaCO':
            scoringkeywords = await scoringkeywordsBancoColombiaModel.find(filter);
            return scoringkeywords ;

        case 'igsEnelCL':
            scoringkeywords = await scoringkeywordsEnelChileModel.find(filter);
            return scoringkeywords;
        case 'igsBanorteMX' :
            scoringkeywords = await scoringkeywordsIgsBanorteMXModel.find(filter);
            return scoringkeywords;
        case 'igsBanistmoPA' :
            scoringkeywords = await scoringkeywordsIgsBanistmoPAModel.find(filter);
            return scoringkeywords;
        case 'bpogsBoldEnglishUS' :
            scoringkeywords = await scoringkeywordsBpogsBoldEnglishUSModel.find(filter);
            return scoringkeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            scoringkeywords = await scoringkeywordsBpogsHitesDespachoRetrioCOModel.find(filter);
            return scoringkeywords; 
        case 'bpogsBoldFrenchFR' :
            scoringkeywords = await scoringkeywordsBpogsBoldFrenchFRModel.find(filter);
            return scoringkeywords;
        case 'igsDaviplataCO' :
            scoringkeywords = await scoringkeywordsDaviplataCOModel.find(filter);
            return scoringkeywords;
        case 'bpogsAMCCO' :
            scoringkeywords = await scoringkeywordsBpogsAMCCOModel.find(filter);
            return scoringkeywords;
        case 'igsBancoDeOccidenteCO' :
            scoringkeywords = await scoringkeywordsIgsBancoDeOccidenteCOModel.find(filter);
            return scoringkeywords;
        case 'igsSufiCO' :
            scoringkeywords = await scoringkeywordsIgsSufiCOModel.find(filter);
            return scoringkeywords;
        case 'bpogsHitesFinancieroCO' :
            scoringkeywords = await scoringkeywordsBpogsHitesFinancieroCOModel.find(filter);
            return scoringkeywords;
        case 'igsColpatriaCO' :
            scoringkeywords = await scoringkeywordsIgsColpatriaCOModel.find(filter);
            return scoringkeywords;
        case 'igsEntelCL' :
            scoringkeywords = await scoringkeywordsIgsEntelCLModel.find(filter);
            return scoringkeywords;
        case 'igsPromericaCO' :
            scoringkeywords = await scoringkeywordsIgsPromericaCOModel.find(filter);
            return scoringkeywords;
        case 'igsBancolombiaAM' :
            scoringkeywords = await scoringkeywordsIgsBancolombiaAMModel.find(filter);
            return scoringkeywords;
        case 'igsAlmacenesSI' :
            scoringkeywords = await scoringkeywordsIgsAlmacenesSIModel.find(filter);
            return scoringkeywords;
        case 'igsJelpitCO' :
            scoringkeywords = await scoringkeywordsIgsJelpitCOModel.find(filter);
            return scoringkeywords;
        case 'igsComfamiliarCO' :
            scoringkeywords = await scoringkeywordsIgsComfamiliarCOModel.find(filter);
            return scoringkeywords;
        case 'igsBancoAgricolaSV' :
            scoringkeywords = await scoringkeywordsIgsBancoAgricolaSVModel.find(filter);
            return scoringkeywords;
        case 'igsDaviviendaCR' :
            scoringkeywords = await scoringkeywordsIgsDaviviendaCRModel.find(filter);
            return scoringkeywords;                                
               
        }
        
}

module.exports = {
    list:getScoringkeywords,
}


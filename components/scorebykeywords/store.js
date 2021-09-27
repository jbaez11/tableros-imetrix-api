const {scoreSerFinanzaModel,
    scoreBancoColombiaModel,
    scoreEnelChileModel,
    scoreIgsBanorteMXModel,
    scoreIgsBanistmoPAModel,
    scoreBpogsBoldEnglishUSModel,
    scoreBpogsHitesDespachoRetrioCOModel,
    scoreBpogsBoldFrenchFRModel,
    scoreDaviplataCOModel,
    scoreBpogsAMCCOModel,
    scoreIgsBancoDeOccidenteCOModel,
    scoreIgsSufiCOModel,
    scoreBpogsHitesFinancieroCOModel,
    scoreIgsColpatriaCOModel,
    scoreIgsEntelCLModel,
    scoreIgsPromericaCOModel,
    scoreIgsBancolombiaAMModel,
    scoreIgsAlmacenesSIModel,
    scoreIgsJelpitCOModel} = require('./model');

async function getScore(filterScore){
    let filter = {};
    
    if(filterScore != null){
        if(filterScore[0] == 2 && filterScore[1]==0){
            filter = {
                eventDate:filterScore
              //eventDate:{$gte:[filterAgentsAudit[0]],$lte:[filterAgentsAudit[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }else{
            if(filterScore[0]>filterScore[1]){
               filterScore.sort();
            }
            filter = {
                //eventDate:filterAgentsAudit
              eventDate:{$gte:[filterScore[0]],$lte:[filterScore[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }
        
    } 
    var score ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            score = await scoreSerFinanzaModel.find(filter);
            return score;

        case 'igsBancolombiaCO':
            score = await scoreBancoColombiaModel.find(filter);
            return score ;

        case 'igsEnelCL':
            score = await scoreEnelChileModel.find(filter);
            return score;
        case 'igsBanorteMX' :
            score = await scoreIgsBanorteMXModel.find(filter);
            return score;
        case 'igsBanistmoPA' :
            score = await scoreIgsBanistmoPAModel.find(filter);
            return score;
        case 'bpogsBoldEnglishUS' :
            score = await scoreBpogsBoldEnglishUSModel.find(filter);
            return score;
        case 'bpogsHitesDespachoRetiroCO' :
            score = await scoreBpogsHitesDespachoRetrioCOModel.find(filter);
            return score;   
        case 'bpogsBoldFrenchFR' :
            score = await scoreBpogsBoldFrenchFRModel.find(filter);
            return score;
        case 'igsDaviplataCO' :
            score = await scoreDaviplataCOModel.find(filter);
            return score;
        case 'bpogsAMCCO' :
            score = await scoreBpogsAMCCOModel.find(filter);
            return score;
        case 'igsBancoDeOccidenteCO' :
            score = await scoreIgsBancoDeOccidenteCOModel.find(filter);
            return score;
        case 'igsSufiCO' :
            score = await scoreIgsSufiCOModel.find(filter);
            return score;
       case 'bpogsHitesFinancieroCO' :
            score = await scoreBpogsHitesFinancieroCOModel.find(filter);
            return score;
        case 'igsColpatriaCO' :
            score = await scoreIgsColpatriaCOModel.find(filter);
            return score;
        case 'igsEntelCL' :
            score = await scoreIgsEntelCLModel.find(filter);
            return score;
        case 'igsPromericaCO' :
            score = await scoreIgsPromericaCOModel.find(filter);
            return score;
            
        case 'igsBancolombiaAM' :
            score = await scoreIgsBancolombiaAMModel.find(filter);
            return score;
            
        case 'igsAlmacenesSI' :
            score = await scoreIgsAlmacenesSIModel.find(filter);
            return score;
        case 'igsJelpitCO' :
            score = await scoreIgsJelpitCOModel.find(filter);
            return score;
                         
        }
        
}

module.exports = {
    list:getScore,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}


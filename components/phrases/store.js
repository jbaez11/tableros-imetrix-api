const {phrasesSerFinanzaModel,
    phrasesBancoColombiaModel,
    phrasesEnelChileModel,
    phrasesIgsBanorteMXModel,
    phrasesIgsBanistmoPAModel,
    phrasesBpogsBoldEnglishUSModel,
    phrasesBpogsHitesDespachoRetrioCOModel,
    phrasesBpogsBoldFrenchFRModel,
    phrasesDaviplataCOModel} = require('./model');

async function getAsesores(filterAgentsAudit,nameDB){
    let filter = {};
    
    if(filterAgentsAudit != null){
        filter = {
            keyfile:filterAgentsAudit
        };
    }
    var phrases ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            phrases = await phrasesSerFinanzaModel.find(filter);
            return phrases;

        case 'igsBancolombiaCO':
            phrases = await phrasesBancoColombiaModel.find(filter);
            return phrases ;

        case 'igsEnelCL':
            phrases = await phrasesEnelChileModel.find(filter);
            return phrases;
        case 'igsBanorteMX' :
            phrases = await phrasesIgsBanorteMXModel.find(filter);
            return phrases;
        case 'igsBanistmoPA' :
            phrases = await phrasesIgsBanistmoPAModel.find(filter);
            return phrases;
        case 'bpogsBoldEnglishUS' :
            phrases = await phrasesBpogsBoldEnglishUSModel.find(filter);
            return phrases;
        case 'bpogsHitesDespachoRetiroCO' :
            phrases = await phrasesBpogsHitesDespachoRetrioCOModel.find(filter);
            return phrases;  
        case 'bpogsBoldFrenchFR' :
            phrases = await phrasesBpogsBoldFrenchFRModel.find(filter);
            return phrases; 
        case 'igsDaviplataCO' :
            phrases = await phrasesDaviplataCOModel.find(filter);
            return phrases;       
                
        }
}

module.exports = {
    list:getAsesores,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}


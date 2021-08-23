const {auditPhrasesSerFinanzaModel,
    auditPhrasesBancoColombiaModel,
    auditPhrasesEnelChileModel,
    auditPhrasesIgsBanorteMXModel,
    auditPhrasesIgsBanistmoPAModel,
    auditPhrasesBpogsBoldEnglishUSModel,
    auditPhrasesBpogsHitesDespachoRetrioCOModel,
    auditPhrasesBpogsBoldFrenchFRModel,
    auditPhrasesIgsDaviplataCOModel} = require('./model');

async function getAsesoresPhrases(filterAgentsAuditPhrases,nameDB){
    let filter = {};
    
    if(filterAgentsAuditPhrases != null){
        if(filterAgentsAuditPhrases[0] == 2 && filterAgentsAuditPhrases[1]==0){
            filter = {
                eventDate:filterAgentsAuditPhrases
              //eventDate:{$gte:[filterAgentsAudit[0]],$lte:[filterAgentsAudit[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }else{
            if(filterAgentsAuditPhrases[0]>filterAgentsAuditPhrases[1]){
               filterAgentsAuditPhrases.sort();
            }
            filter = {
                //eventDate:filterAgentsAudit
              eventDate:{$gte:[filterAgentsAuditPhrases[0]],$lte:[filterAgentsAuditPhrases[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }
        
    }
    var auditPhrases ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            auditPhrases = await auditPhrasesSerFinanzaModel.find(filter);
            return auditPhrases;

        case 'igsBancolombiaCO':
            auditPhrases = await auditPhrasesBancoColombiaModel.find(filter);
            return auditPhrases ;

        case 'igsEnelCL':
            auditPhrases = await auditPhrasesEnelChileModel.find(filter);
            return auditPhrases;
        case 'igsBanorteMX' :
            auditPhrases = await auditPhrasesIgsBanorteMXModel.find(filter);
            return auditPhrases;
        case 'igsBanistmoPA' :
            auditPhrases = await auditPhrasesIgsBanistmoPAModel.find(filter);
            return auditPhrases;
        case 'bpogsBoldEnglishUS' :
            auditPhrases = await auditPhrasesBpogsBoldEnglishUSModel.find(filter);
            return auditPhrases;
        case 'bpogsHitesDespachoRetiroCO' :
            auditPhrases = await auditPhrasesBpogsHitesDespachoRetrioCOModel.find(filter);
            return auditPhrases;
        case 'bpogsBoldFrenchFR' :
            auditPhrases = await auditPhrasesBpogsBoldFrenchFRModel.find(filter);
            return auditPhrases;
            
        case 'igsDaviplataCO' :
            auditPhrases = await auditPhrasesIgsDaviplataCOModel.find(filter);
            return auditPhrases; 
                        
        }
}

module.exports = {
    list:getAsesoresPhrases,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}


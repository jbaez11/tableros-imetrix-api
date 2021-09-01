const {auditconversationSerFinanzaModel,
    auditconversationBancoColombiaModel,
    auditconversationEnelChileModel,
    auditconversationIgsBanorteMXModel,
    auditconversationIgsBanistmoPAModel,
    auditconversationBpogsBoldEnglishUSModel,
    auditconversationBpogsHitesDespachoRetrioCOModel,
    auditconversationalkTestCOModel,
    auditconversationBpogsBoldFrenchFRModel,
    auditconversationDaviplataCOModel,
    auditconversationBpogsAMCCOModel,
    auditconversationIgsBancoDeOccidenteCOModel,
    auditconversationIgsSufiCOModel,
    auditconversationBpogsHitesFinancieroCOModel,
    auditconversationIgsColpatriaCOModel,
    auditconversationIgsEntelCLModel,
    auditconversationIgsPromericaCOModel,
    auditconversationIgsBancolombiaAMModel} = require('./model');

async function getConversations(filterConversations){
    let filter = {};
    
    if(filterConversations != null){
        filter = {
            eventDate:filterConversations
        };
    }

    var auditconversation ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            auditconversation = await auditconversationSerFinanzaModel.find(filter);
            return auditconversation;

        case 'igsBancolombiaCO':
            auditconversation = await auditconversationBancoColombiaModel.find(filter);
            return auditconversation ;

        case 'igsEnelCL':
            auditconversation = await auditconversationEnelChileModel.find(filter);
            return auditconversation;
        case 'igsBanorteMX' :
            auditconversation = await auditconversationIgsBanorteMXModel.find(filter);
            return auditconversation;
        case 'igsBanistmoPA' :
            auditconversation = await auditconversationIgsBanistmoPAModel.find(filter);
            return auditconversation;
        case 'bpogsBoldEnglishUS' :
            auditconversation = await auditconversationBpogsBoldEnglishUSModel.find(filter);
            return auditconversation;
        case 'bpogsHitesDespachoRetiroCO' :
            auditconversation = await auditconversationBpogsHitesDespachoRetrioCOModel.find(filter);
            return auditconversation;
        case 'alkTestCO' :
            conversations = await auditconversationalkTestCOModel.find(filter);
            return conversations;
        case 'bpogsBoldFrenchFR' :
            auditconversation = await auditconversationBpogsBoldFrenchFRModel.find(filter);
            return auditconversation;
        case 'igsDaviplataCO' :
            auditconversation = await auditconversationDaviplataCOModel.find(filter);
            return auditconversation;
        case 'bpogsAMCCO' :
            auditconversation = await auditconversationBpogsAMCCOModel.find(filter);
            return auditconversation;
        case 'igsBancoDeOccidenteCO' :
            auditconversation = await auditconversationIgsBancoDeOccidenteCOModel.find(filter);
            return auditconversation;
        case 'igsSufiCO' :
                auditconversation = await auditconversationIgsSufiCOModel.find(filter);
                return auditconversation;
        case 'bpogsHitesFinancieroCO' :
                auditconversation = await auditconversationBpogsHitesFinancieroCOModel.find(filter);
                return auditconversation;   
        case 'igsColpatriaCO' :
                auditconversation = await auditconversationIgsColpatriaCOModel.find(filter);
                return auditconversation;
        case 'igsEntelCL' :
                auditconversation = await auditconversationIgsEntelCLModel.find(filter);
                return auditconversation;
        case 'igsPromericaCO' :
                auditconversation = await auditconversationIgsPromericaCOModel.find(filter);
                return auditconversation;
        case 'igsBancolombiaAM' :
                auditconversation = await auditconversationIgsBancolombiaAMModel.find(filter);
                return auditconversation;                                    
        }
        
    
}

module.exports = {
    list:getConversations,
    
}


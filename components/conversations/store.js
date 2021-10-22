const {conversationsSerFinanzaModel,
    conversationsBancoColombiaModel,
    conversationsEnelChileModel,
    conversationsIgsBanorteMXModel,
    conversationsIgsBanistmoPAModel,
    conversationsBpogsBoldEnglishUSModel,
    conversationsBpogsHitesDespachoRetrioCOModel,
    conversationsAlkTestCOModel,
    conversationsBpogsBoldFrenchFRModel,
    conversationsDaviplataCOModel,
    conversationsBpogsAMCCOModel,
    conversationsIgsBancoDeOccidenteCOModel,
    conversationsIgsSufiCOModel,
    conversationsBpogsHitesFinancieroCOModel,
    conversationsIgsColpatriaCOModel,
    conversationsIgsEntelCLModel,
    conversationsIgsPromericaCOModel,
    conversationsIgsBancolombiaAMModel,
    conversationsIgsAlmacenesSIModel,
    conversationsIgsJelpitCOModel,
    conversationsIgsComfamiliarCOModel,
    conversationsIgsBancoAgricolaSVModel,
    conversationsIgsDaviviendaCRModel} = require('./model');

async function getConversations(filterConversations,nameDB){
    let filter = {};
    
    if(filterConversations != null){
        filter = {
            keyfile:filterConversations
        };
    }
    var conversations ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            conversations = await conversationsSerFinanzaModel.find(filter);
            return conversations;

        case 'igsBancolombiaCO':
            conversations = await conversationsBancoColombiaModel.find(filter);
            return conversations ;

        case 'igsEnelCL':
            conversations = await conversationsEnelChileModel.find(filter);
            return conversations;
        case 'igsBanorteMX' :
            conversations = await conversationsIgsBanorteMXModel.find(filter);
            return conversations;
        case 'igsBanistmoPA' :
            conversations = await conversationsIgsBanistmoPAModel.find(filter);
            return conversations;
        case 'bpogsBoldEnglishUS' :
            conversations = await conversationsBpogsBoldEnglishUSModel.find(filter);
            return conversations;
        case 'bpogsHitesDespachoRetiroCO' :
            conversations = await conversationsBpogsHitesDespachoRetrioCOModel.find(filter);
            return conversations;
        case 'alkTestCO' :
            conversations = await conversationsAlkTestCOModel.find(filter);
            return conversations; 
        case 'bpogsBoldFrenchFR' :
            conversations = await conversationsBpogsBoldFrenchFRModel.find(filter);
            return conversations;
        case 'igsDaviplataCO' :
            conversations = await conversationsDaviplataCOModel.find(filter);
            return conversations;
        case 'bpogsAMCCO' :
            conversations = await conversationsBpogsAMCCOModel.find(filter);
            return conversations;
        case 'igsBancoDeOccidenteCO' :
            conversations = await conversationsIgsBancoDeOccidenteCOModel.find(filter);
            return conversations;
        case 'igsSufiCO' :
            conversations = await conversationsIgsSufiCOModel.find(filter);
            return conversations;
        case 'bpogsHitesFinancieroCO' :
            conversations = await conversationsBpogsHitesFinancieroCOModel.find(filter);
            return conversations;
        case 'igsColpatriaCO' :
            conversations = await conversationsIgsColpatriaCOModel.find(filter);
            return conversations;
        case 'igsEntelCL' :
            conversations = await conversationsIgsEntelCLModel.find(filter);
            return conversations;
        case 'igsPromericaCO' :
            conversations = await conversationsIgsPromericaCOModel.find(filter);
            return conversations;
        case 'igsBancolombiaAM' :
            conversations = await conversationsIgsBancolombiaAMModel.find(filter);
            return conversations;
        case 'igsAlmacenesSI' :
            conversations = await conversationsIgsAlmacenesSIModel.find(filter);
            return conversations;
        case 'igsJelpitCO' :
            conversations = await conversationsIgsJelpitCOModel.find(filter);
            return conversations;
        case 'igsComfamiliarCO' :
            conversations = await conversationsIgsComfamiliarCOModel.find(filter);
            return conversations;
        case 'igsBancoAgricolaSV' :
            conversations = await conversationsIgsBancoAgricolaSVModel.find(filter);
            return conversations;
        case 'igsDaviviendaCR' :
            conversations = await conversationsIgsDaviviendaCRModel.find(filter);
            return conversations;            
                           
        }
        
}

module.exports = {
    list:getConversations,
    
}


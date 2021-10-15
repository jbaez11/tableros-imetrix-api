const {baseKeywordsSerFinanzaModel,
    baseKeywordsBancoColombiaModel,
    baseKeywordsEnelChileModel,
    baseKeywordsIgsBanorteMXModel,
    baseKeywordsIgsBanistmoPAModel,
    baseKeywordsBpogsBoldEnglishUSModel,
    baseKeywordsBpogsHitesDespachoRetrioCOModel,
    baseKeywordsBpogsBoldFrenchFRModel,
    baseKeywordsDaviplataCOModel,
    baseKeywordsBpogsAMCCOModel,
    baseKeywordsIgsBancoDeOccidenteCOModel,
    baseKeywordsIgsSufiCOModel,
    baseKeywordsBpogsHitesFinancieroCOModel,
    baseKeywordsIgsColpatriaCOModel,
    baseKeywordsIgsEntelCLModel,
    baseKeywordsIgsPromericaCOModel,
    baseKeywordsIgsBancolombiaAMModel,
    baseKeywordsIgsAlmacenesSIModel,
baseKeywordsIgsJelpitCOModel,
baseKeywordsIgsComfamiliarCOModel,
baseKeywordsIgsBancoAgricolaSVModel} = require('./model');

async function getBaseKeywords(nameDB){
    var baseKeywords;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            baseKeywords = await baseKeywordsSerFinanzaModel.find();
            return baseKeywords;

        case 'igsBancolombiaCO':
            baseKeywords = await baseKeywordsBancoColombiaModel.find();
            return baseKeywords ;

        case 'igsEnelCL':
            baseKeywords = await baseKeywordsEnelChileModel.find();
            return baseKeywords;
        case 'igsBanorteMX' :
            baseKeywords = await baseKeywordsIgsBanorteMXModel.find();
            return baseKeywords;
        case 'igsBanistmoPA' :
            baseKeywords = await baseKeywordsIgsBanistmoPAModel.find();
            return baseKeywords;
        case 'bpogsBoldEnglishUS' :
            baseKeywords = await baseKeywordsBpogsBoldEnglishUSModel.find();
            return baseKeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            baseKeywords = await baseKeywordsBpogsHitesDespachoRetrioCOModel.find();
            return baseKeywords;
            
        case 'bpogsBoldFrenchFR' :
            baseKeywords = await baseKeywordsBpogsBoldFrenchFRModel.find();
            return baseKeywords;
        case 'igsDaviplataCO' :
            baseKeywords = await baseKeywordsDaviplataCOModel.find();
            return baseKeywords;
        case 'bpogsAMCCO' :
            baseKeywords = await baseKeywordsBpogsAMCCOModel.find();
            return baseKeywords;
        case 'igsBancoDeOccidenteCO' :
            baseKeywords = await baseKeywordsIgsBancoDeOccidenteCOModel.find();
            return baseKeywords;
        case 'igsSufiCO' :
            baseKeywords = await baseKeywordsIgsSufiCOModel.find();
            return baseKeywords;
        case 'bpogsHitesFinancieroCO' :
            baseKeywords = await baseKeywordsBpogsHitesFinancieroCOModel.find();
            return baseKeywords;
        case 'igsColpatriaCO' :
            baseKeywords = await baseKeywordsIgsColpatriaCOModel.find();
            return baseKeywords;
        case 'igsEntelCL' :
            baseKeywords = await baseKeywordsIgsEntelCLModel.find();
            return baseKeywords;
        case 'igsPromericaCO' :
            baseKeywords = await baseKeywordsIgsPromericaCOModel.find();
            return baseKeywords;
        case 'igsBancolombiaAM' :
            baseKeywords = await baseKeywordsIgsBancolombiaAMModel.find();
            return baseKeywords;
        case 'igsAlmacenesSI' :
            baseKeywords = await baseKeywordsIgsAlmacenesSIModel.find();
            return baseKeywords;
        case 'igsJelpitCO' :
            baseKeywords = await baseKeywordsIgsJelpitCOModel.find();
            return baseKeywords;
        case 'igsComfamiliarCO' :
            baseKeywords = await baseKeywordsIgsComfamiliarCOModel.find();
            return baseKeywords;
            
        case 'igsBancoAgricolaSV' :
            baseKeywords = await baseKeywordsIgsBancoAgricolaSVModel.find();
            return baseKeywords;
        }
        
    
}

function addBaseKeywords(baseKeywords,nameDB){

    var myBaseKeywords;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            myBaseKeywords = new baseKeywordsSerFinanzaModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;

        case 'igsBancolombiaCO':
            myBaseKeywords = new baseKeywordsBancoColombiaModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords ;

        case 'igsEnelCL':
            myBaseKeywords = new baseKeywordsEnelChileModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsBanorteMX' :
            myBaseKeywords = new baseKeywordsIgsBanorteMXModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsBanistmoPA' :
            myBaseKeywords = new baseKeywordsIgsBanistmoPAModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'bpogsBoldEnglishUS' :
            myBaseKeywords = new baseKeywordsBpogsBoldEnglishUSModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            myBaseKeywords = new baseKeywordsBpogsHitesDespachoRetrioCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
            
        case 'bpogsBoldFrenchFR' :
            myBaseKeywords = new baseKeywordsBpogsBoldFrenchFRModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsDaviplataCO' :
            myBaseKeywords = new baseKeywordsDaviplataCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'bpogsAMCCO' :
            myBaseKeywords = new baseKeywordsBpogsAMCCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsBancoDeOccidenteCO' :
            myBaseKeywords = new baseKeywordsIgsBancoDeOccidenteCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsSufiCO' :
            myBaseKeywords = new baseKeywordsIgsSufiCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'bpogsHitesFinancieroCO' :
            myBaseKeywords = new baseKeywordsBpogsHitesFinancieroCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsColpatriaCO' :
            myBaseKeywords = new baseKeywordsIgsColpatriaCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsEntelCL' :
            myBaseKeywords = new baseKeywordsIgsEntelCLModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsPromericaCO' :
            myBaseKeywords = new baseKeywordsIgsPromericaCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
            
        case 'igsBancolombiaAM' :
            myBaseKeywords = new baseKeywordsIgsBancolombiaAMModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsAlmacenesSI' :
            myBaseKeywords = new baseKeywordsIgsAlmacenesSIModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsJelpitCO' :
            myBaseKeywords = new baseKeywordsIgsJelpitCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsComfamiliarCO' :
            myBaseKeywords = new baseKeywordsIgsComfamiliarCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
            
        case 'igsBancoAgricolaSV' :
            myBaseKeywords = new baseKeywordsIgsBancoAgricolaSVModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        }
        
    
        return myBaseKeywords;  
}

async function updateBaseKeywords(id,keyword,category,module,cluster,nameDB){
    

    var foundBaseKeywords;
    var newBaseKeywords;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            foundBaseKeywords = await baseKeywordsSerFinanzaModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'igsBancolombiaCO':
            foundBaseKeywords = await baseKeywordsBancoColombiaModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords ;

        case 'igsEnelCL':
            foundBaseKeywords = await baseKeywordsEnelChileModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'igsBanorteMX' :
            foundBaseKeywords = await baseKeywordsIgsBanorteMXModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            
            return newBaseKeywords;
        case 'igsBanistmoPA' :
            foundBaseKeywords = await baseKeywordsIgsBanistmoPAModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'bpogsBoldEnglishUS' :
            foundBaseKeywords = await baseKeywordsBpogsBoldEnglishUSModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            foundBaseKeywords = await baseKeywordsBpogsHitesDespachoRetrioCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
            
        case 'bpogsBoldFrenchFR' :
            foundBaseKeywords = await baseKeywordsBpogsBoldFrenchFRModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'igsDaviplataCO' :
            foundBaseKeywords = await baseKeywordsDaviplataCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'bpogsAMCCO' :
            foundBaseKeywords = await baseKeywordsBpogsAMCCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'igsBancoDeOccidenteCO' :
            foundBaseKeywords = await baseKeywordsIgsBancoDeOccidenteCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'igsSufiCO' :
            foundBaseKeywords = await baseKeywordsIgsSufiCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'bpogsHitesFinancieroCO' :
            foundBaseKeywords = await baseKeywordsBpogsHitesFinancieroCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'igsColpatriaCO' :
            foundBaseKeywords = await baseKeywordsIgsColpatriaCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'igsEntelCL' :
            foundBaseKeywords = await baseKeywordsIgsEntelCLModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'igsPromericaCO' :
            foundBaseKeywords = await baseKeywordsIgsPromericaCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'igsBancolombiaAM' :
            foundBaseKeywords = await baseKeywordsIgsBancolombiaAMModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
            
        case 'igsAlmacenesSI' :
            foundBaseKeywords = await baseKeywordsIgsAlmacenesSIModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'igsJelpitCO' :
            foundBaseKeywords = await baseKeywordsIgsJelpitCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'igsComfamiliarCO' :
            foundBaseKeywords = await baseKeywordsIgsComfamiliarCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        
        case 'igsBancoAgricolaSV' :
            foundBaseKeywords = await baseKeywordsIgsComfamiliarCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.cluster=cluster;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        }

      return newBaseKeywords;
      
    
}


function removeBaseKeywords(id,nameDB){
    // return Model.deleteOne({
    //     _id:id
    // });

    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            return baseKeywordsSerFinanzaModel.deleteOne({_id:id});
            
        case 'igsBancolombiaCO':
            return baseKeywordsBancoColombiaModel.deleteOne({_id:id});
            
        case 'igsEnelCL':
            return baseKeywordsEnelChileModel.deleteOne({_id:id});
            
        case 'igsBanorteMX' :
            return baseKeywordsIgsBanorteMXModel.deleteOne({_id:id});
            
        case 'igsBanistmoPA' :
            return baseKeywordsIgsBanistmoPAModel.deleteOne({_id:id});
            
        case 'bpogsBoldEnglishUS' :
            return baseKeywordsBpogsBoldEnglishUSModel.deleteOne({_id:id});
            
        case 'bpogsHitesDespachoRetiroCO' :
            return baseKeywordsBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
            
        case 'bpogsBoldFrenchFR' :
            return baseKeywordsBpogsBoldFrenchFRModel.deleteOne({_id:id});

        case 'igsDaviplataCO' :
            return baseKeywordsDaviplataCOModel.deleteOne({_id:id});
        case 'bpogsAMCCO' :
            return baseKeywordsBpogsAMCCOModel.deleteOne({_id:id});
        case 'igsBancoDeOccidenteCO' :
            return baseKeywordsIgsBancoDeOccidenteCOModel.deleteOne({_id:id});
        case 'igsSufiCO' :
            return baseKeywordsIgsSufiCOModel.deleteOne({_id:id});
        case 'bpogsHitesFinancieroCO' :
            return baseKeywordsBpogsHitesFinancieroCOModel.deleteOne({_id:id});    
        case 'igsColpatriaCO' :
            return baseKeywordsIgsColpatriaCOModel.deleteOne({_id:id});
        case 'igsEntelCL' :
            return baseKeywordsIgsEntelCLModel.deleteOne({_id:id});
        case 'igsPromericaCO' :
            return baseKeywordsIgsPromericaCOModel.deleteOne({_id:id});
        case 'igsBancolombiaAM' :
            return baseKeywordsIgsBancolombiaAMModel.deleteOne({_id:id});
        case 'igsAlmacenesSI' :
            return baseKeywordsIgsAlmacenesSIModel.deleteOne({_id:id});
        case 'igsJelpitCO' :
            return baseKeywordsIgsJelpitCOModel.deleteOne({_id:id});
        case 'igsComfamiliarCO' :
            return baseKeywordsIgsComfamiliarCOModel.deleteOne({_id:id});
        case 'igsBancoAgricolaSV' :
            return baseKeywordsIgsBancoAgricolaSVModel.deleteOne({_id:id});    
        }

        
    
}

module.exports = {
    list:getBaseKeywords,
    add: addBaseKeywords,
    updateText: updateBaseKeywords,
    remove:removeBaseKeywords,
}
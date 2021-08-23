const {basePhrasesSerFinanzaModel,
    basePhrasesBancoColombiaModel,
    basePhrasesEnelChileModel,
    basePhrasesIgsBanorteMXModel,
    basePhrasesIgsBanistmoPAModel,
    basePhrasesBpogsBoldEnglishUSModel,
    basePhrasesBpogsHitesDespachoRetrioCOModel,
    basePhrasesBpogsBoldFrenchFRModel,
    basePhrasesDaviplataCOModel} = require('./model');


async function getBasePhrases(nameDB){
    var basePhrases;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            basePhrases = await basePhrasesSerFinanzaModel.find();
            return basePhrases;

        case 'igsBancolombiaCO':
            basePhrases = await basePhrasesBancoColombiaModel.find();
            return basePhrases ;

        case 'igsEnelCL':
            basePhrases = await basePhrasesEnelChileModel.find();
            return basePhrases;
        case 'igsBanorteMX' :
            basePhrases = await basePhrasesIgsBanorteMXModel.find();
            return basePhrases;
        case 'igsBanistmoPA' :
            basePhrases = await basePhrasesIgsBanistmoPAModel.find();
            return basePhrases;
        case 'bpogsBoldEnglishUS' :
            basePhrases = await basePhrasesBpogsBoldEnglishUSModel.find();
            return basePhrases;
        case 'bpogsHitesDespachoRetiroCO' :
            basePhrases = await basePhrasesBpogsHitesDespachoRetrioCOModel.find();
            return basePhrases;
            
        case 'bpogsBoldFrenchFR' :
            basePhrases = await basePhrasesBpogsBoldFrenchFRModel.find();
            return basePhrases;
        case 'igsDaviplataCO' :
            basePhrases = await basePhrasesDaviplataCOModel.find();
            return basePhrases;
        }
}

function addBasePhrases(basePhrases,nameDB){
   
    
    // const myBasePhrases = new Model(basePhrases);
    // console.log('store ',myBasePhrases)
    // myBasePhrases.save();


    var myBasePhrases;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            myBasePhrases = new basePhrasesSerFinanzaModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;

        case 'igsBancolombiaCO':
            myBasePhrases = new basePhrasesBancoColombiaModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases ;

        case 'igsEnelCL':
            myBasePhrases = new basePhrasesEnelChileModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'igsBanorteMX' :
            myBasePhrases = new basePhrasesIgsBanorteMXModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'igsBanistmoPA' :
            myBasePhrases = new basePhrasesIgsBanistmoPAModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'bpogsBoldEnglishUS' :
            myBasePhrases = new basePhrasesBpogsBoldEnglishUSModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'bpogsHitesDespachoRetiroCO' :
            myBasePhrases = new basePhrasesBpogsHitesDespachoRetrioCOModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
            
        case 'bpogsBoldFrenchFR' :
            myBasePhrases = new basePhrasesBpogsBoldFrenchFRModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'igsDaviplataCO' :
            myBasePhrases = new basePhrasesDaviplataCOModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        }
    

}

async function updateBasePhrases(id,phrase,module,category,nameDB){
    
    var foundBasePhrases;
    var newBasePhrases;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            foundBasePhrases = await basePhrasesSerFinanzaModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;
            

        case 'igsBancolombiaCO':
            foundBasePhrases = await basePhrasesBancoColombiaModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;

        case 'igsEnelCL':
            foundBasePhrases = await basePhrasesEnelChileModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;
        case 'igsBanorteMX' :
            foundBasePhrases = await basePhrasesIgsBanorteMXModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;
        case 'igsBanistmoPA' :
            foundBasePhrases = await basePhrasesIgsBanistmoPAModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;
        case 'bpogsBoldEnglishUS' :
            foundBasePhrases = await basePhrasesBpogsBoldEnglishUSModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;
        case 'bpogsHitesDespachoRetrioCO' :
            foundBasePhrases = await basePhrasesBpogsHitesDespachoRetrioCOModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;
            case 'bpogsBoldFrenchFR' :
            foundBasePhrases = await basePhrasesBpogsBoldFrenchFRModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;

            case 'igsDaviplataCO' :
            foundBasePhrases = await basePhrasesDaviplataCOModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            
            newBasePhrases = await foundBasePhrases.save();
            
            return newBasePhrases;
            
        }
        return newBasePhrases

}

function removeBasePhrases(id,nameDB){
    // return Model.deleteOne({
    //     _id:id
    // });

    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            return basePhrasesSerFinanzaModel.deleteOne({_id:id});
            
        case 'igsBancolombiaCO':
            return basePhrasesBancoColombiaModel.deleteOne({_id:id});

        case 'igsEnelCL':
            return basePhrasesEnelChileModel.deleteOne({_id:id});
            
        case 'igsBanorteMX' :
            return basePhrasesIgsBanorteMXModel.deleteOne({_id:id});
            
        case 'igsBanistmoPA' :
            return basePhrasesIgsBanistmoPAModel.deleteOne({_id:id});
            
        case 'bpogsBoldEnglishUS' :
            return basePhrasesBpogsBoldEnglishUSModel.deleteOne({_id:id});
            
        case 'bpogsHitesDespachoRetiroCO' :
            return basePhrasesBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
        case 'bpogsBoldFrenchFR' :
            return basePhrasesBpogsBoldFrenchFRModel.deleteOne({_id:id});
        case 'igsDaviplataCO' :
            return basePhrasesDaviplataCOModel.deleteOne({_id:id});    
            
        }
}

module.exports = {
    list:getBasePhrases,
    add: addBasePhrases,
    updateText: updateBasePhrases,
    remove:removeBasePhrases,
}
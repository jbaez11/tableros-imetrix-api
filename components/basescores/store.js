const {basescoreSerFinanzaModel,
    basescoreBancoColombiaModel,
    basescoreEnelChileModel,
    basescoreIgsBanorteMXModel,
    basescoreIgsBanistmoPAModel,
    basescoreBpogsBoldEnglishUSModel,
    basescoreBpogsHitesDespachoRetrioCOModel,
    basescoreBpogsBoldFrenchFRModel,
    basescoreDaviplataCOModel,
    basescoreBpogsAMCCOModel,
    basescoreIgsBancoDeOccidenteCOModel} = require('./model');
 

async function getBasescore(nameDB){
    
    

    var basescore ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            basescore = await basescoreSerFinanzaModel.find();
            return basescore;

        case 'igsBancolombiaCO':
            basescore = await basescoreBancoColombiaModel.find();
            return basescore ;

        case 'igsEnelCL':
            basescore = await basescoreEnelChileModel.find();
            return basescore;
        case 'igsBanorteMX' :
            basescore = await basescoreIgsBanorteMXModel.find();
            return basescore;
        case 'igsBanistmoPA' :
            basescore = await basescoreIgsBanistmoPAModel.find();
            return basescore;
        case 'bpogsBoldEnglishUS' :
            basescore = await basescoreBpogsBoldEnglishUSModel.find();
            return basescore;
        case 'bpogsHitesDespachoRetiroCO' :
            basescore = await basescoreBpogsHitesDespachoRetrioCOModel.find();
            return basescore; 
        case 'bpogsBoldFrenchFR' :
            basescore = await basescoreBpogsBoldFrenchFRModel.find();
            return basescore;
        case 'igsDaviplataCO' :
            basescore = await basescoreDaviplataCOModel.find();
            return basescore;
        case 'bpogsAMCCO' :
            basescore = await basescoreBpogsAMCCOModel.find();
            return basescore;
        case 'igsBancoDeOccidenteCO' :
            basescore = await basescoreIgsBancoDeOccidenteCOModel.find();
            return basescore;
                       
        }
    //return asesores;
}

function addBasescore(basescore,nameDB){
   
    
    var myBasescore;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            myBasescore = new basescoreSerFinanzaModel(basescore);
            myBasescore.save();
            return myBasescore;

        case 'igsBancolombiaCO':
            myBasescore = new basescoreBancoColombiaModel(basescore);
            myBasescore.save();
            return myBasescore ;

        case 'igsEnelCL':
            myBasescore = new basescoreEnelChileModel(basescore);
            myBasescore.save();
            return myBasescore;
        case 'igsBanorteMX' :
            myBasescore = new basescoreIgsBanorteMXModel(basescore);
            myBasescore.save();
            return myBasescore;
        case 'igsBanistmoPA' :
            myBasescore = new basescoreIgsBanistmoPAModel(basescore);
            myBasescore.save();
            return myBasescore;
        case 'bpogsBoldEnglishUS' :
            myBasescore = new basescoreBpogsBoldEnglishUSModel(basescore);
            myBasescore.save();
            return myBasescore;
        case 'bpogsHitesDespachoRetiroCO' :
            myBasescore = new basescoreBpogsHitesDespachoRetrioCOModel(basescore);
            myBasescore.save();
            return myBasescore;
            
        case 'bpogsBoldFrenchFR' :
            myBasescore = new basescoreBpogsBoldFrenchFRModel(basescore);
            myBasescore.save();
            return myBasescore;
        case 'igsDaviplataCO' :
            myBasescore = new basescoreDaviplataCOModel(basescore);
            myBasescore.save();
            return myBasescore;

        case 'bpogsAMCCO' :
            myBasescore = new basescoreBpogsAMCCOModel(basescore);
            myBasescore.save();
            return myBasescore;
        case 'igsBancoDeOccidenteCO' :
            myBasescore = new basescoreIgsBancoDeOccidenteCOModel(basescore);
            myBasescore.save();
            return myBasescore;
        }
    

}

async function updateBasescore(id,category,modulo,nameDB){
    
    var foundBasescore;
    var newBasescore;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            foundBasescore = await basescoreSerFinanzaModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            
    
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
            

        case 'igsBancolombiaCO':
            foundBasescore = await basescoreBancoColombiaModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;

        case 'igsEnelCL':
            foundBasescore = await basescoreEnelChileModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
        case 'igsBanorteMX' :
            foundBasescore = await basescoreIgsBanorteMXModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
        case 'igsBanistmoPA' :
            foundBasescore = await basescoreIgsBanistmoPAModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
        case 'bpogsBoldEnglishUS' :
            foundBasescore = await basescoreBpogsBoldEnglishUSModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
        case 'bpogsHitesDespachoRetrioCO' :
            foundBasescore = await basescoreBpogsHitesDespachoRetrioCOModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
            case 'bpogsBoldFrenchFR' :
            foundBasescore = await basescoreBpogsBoldFrenchFRModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;

        case 'igsDaviplataCO' :
            foundBasescore = await basescoreDaviplataCOModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;

        case 'bpogsAMCCO' :
            foundBasescore = await basescoreBpogsAMCCOModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;

        case 'igsBancoDeOccidenteCO' :
            foundBasescore = await basescoreIgsBancoDeOccidenteCOModel.findOne({_id:id});
            foundBasescore.category = category ;
            foundBasescore.modulo = modulo;
            foundBasescore.clusters = clusters;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
            
        }
        return newBasescore

}

function removeBasescore(id,nameDB){
    // return Model.deleteOne({
    //     _id:id
    // });

    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            return basescoreSerFinanzaModel.deleteOne({_id:id});
            
        case 'igsBancolombiaCO':
            return basescoreBancoColombiaModel.deleteOne({_id:id});

        case 'igsEnelCL':
            return basescoreEnelChileModel.deleteOne({_id:id});
            
        case 'igsBanorteMX' :
            return basescoreIgsBanorteMXModel.deleteOne({_id:id});
            
        case 'igsBanistmoPA' :
            return basescoreIgsBanistmoPAModel.deleteOne({_id:id});
            
        case 'bpogsBoldEnglishUS' :
            return basescoreBpogsBoldEnglishUSModel.deleteOne({_id:id});
            
        case 'bpogsHitesDespachoRetiroCO' :
            return basescoreBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
        case 'bpogsBoldFrenchFR' :
            return basescoreBpogsBoldFrenchFRModel.deleteOne({_id:id});
        case 'igsDaviplataCO' :
            return basescoreDaviplataCOModel.deleteOne({_id:id});
        case 'bpogsAMCCO' :
            return basescoreBpogsAMCCOModel.deleteOne({_id:id});
        case 'igsBancoDeOccidenteCO' :
            return basescoreIgsBancoDeOccidenteCOModel.deleteOne({_id:id});        
    
            
        }
}


module.exports = {
    list:getBasescore,
    add:addBasescore,
    updateText:updateBasescore,
    remove:removeBasescore,


   
}


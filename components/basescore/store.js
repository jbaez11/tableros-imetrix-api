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
    basescoreIgsBancoDeOccidenteCOModel,
    basescoreIgsSufiCOModel,
    basescoreBpogsHitesFinancieroCOModel,
    basescoreIgsColpatriaCOModel,
    basescoreIgsEntelCLModel,
    basescoreIgsPromericaCOModel,
    basescoreIgsBancolombiaAMModel
} = require('./model');
 

async function getBasescore(filterBasescore,nameDB){
    let filter = {};
    console.log('filtro fc',filterBasescore)
    //console.log('filtro 0 ',filterAgentsAudit[0],' y filtro 1 ',filterAgentsAudit[1])
    if(filterBasescore != null){
        
            filter = {
                eventDate:filterBasescore
            };
        
    }

    var basescore ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            basescore = await basescoreSerFinanzaModel.find(filter);
            return basescore;

        case 'igsBancolombiaCO':
            basescore = await basescoreBancoColombiaModel.find(filter);
            return basescore ;

        case 'igsEnelCL':
            basescore = await basescoreEnelChileModel.find(filter);
            return basescore;
        case 'igsBanorteMX' :
            basescore = await basescoreIgsBanorteMXModel.find(filter);
            return basescore;
        case 'igsBanistmoPA' :
            basescore = await basescoreIgsBanistmoPAModel.find(filter);
            return basescore;
        case 'bpogsBoldEnglishUS' :
            basescore = await basescoreBpogsBoldEnglishUSModel.find(filter);
            return basescore;
        case 'bpogsHitesDespachoRetiroCO' :
            basescore = await basescoreBpogsHitesDespachoRetrioCOModel.find(filter);
            return basescore; 
        case 'bpogsBoldFrenchFR' :
            basescore = await basescoreBpogsBoldFrenchFRModel.find(filter);
            return basescore;
        case 'igsDaviplataCO' :
            basescore = await basescoreDaviplataCOModel.find(filter);
            return basescore;
        case 'bpogsAMCCO' :
            basescore = await basescoreBpogsAMCCOModel.find(filter);
            return basescore;
        case 'igsBancoDeOccidenteCO' :
            basescore = await basescoreIgsBancoDeOccidenteCOModel.find(filter);
            return basescore;
        case 'igsSufiCO' :
            basescore = await basescoreIgsSufiCOModel.find(filter);
            return basescore;
        case 'bpogsHitesFinancieroCO' :
            basescore = await basescoreBpogsHitesFinancieroCOModel.find(filter);
            return basescore;
        case 'igsColpatriaCO' :
            basescore = await basescoreIgsColpatriaCOModel.find(filter);
            return basescore;
        case 'igsEntelCL' :
            basescore = await basescoreIgsEntelCLModel.find(filter);
            return basescore;
        case 'igsPromericaCO' :
            basescore = await basescoreIgsPromericaCOModel.find(filter);
            return basescore;
        case 'igsBancolombiaAM' :
            basescore = await basescoreIgsBancolombiaAMModel.find(filter);
            return basescore;    
                       
        }
        

    //return asesores;
}

function addBasescore(basescore,nameDB){
   
    
    // const myBasePhrases = new Model(basePhrases);
    // console.log('store ',myBasePhrases)
    // myBasePhrases.save();


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
        case 'igsEntelCL' :
            myBasescore = new basescoreIgsEntelCLModel(basescore);
            myBasescore.save();
            return myBasescore;
        case 'igsPromericaCO' :
            myBasescore = new basescoreIgsPromericaCOModel(basescore);
            myBasescore.save();
            return myBasescore;        
        }
    

}

async function updateBasescore(id,infaltable,nameDB){
    
    var foundBasescore;
    var newBasescore;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            foundBasescore = await basescoreSerFinanzaModel.findOne({_id:id});
            foundBasescore.infaltable = infaltable ;
    
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
            

        case 'igsBancolombiaCO':
            foundBasescore = await basescoreBancoColombiaModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;

        case 'igsEnelCL':
            foundBasescore = await basescoreEnelChileModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
        case 'igsBanorteMX' :
            foundBasescore = await basescoreIgsBanorteMXModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
        case 'igsBanistmoPA' :
            foundBasescore = await basescoreIgsBanistmoPAModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
        case 'bpogsBoldEnglishUS' :
            foundBasescore = await basescoreBpogsBoldEnglishUSModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
        case 'bpogsHitesDespachoRetrioCO' :
            foundBasescore = await basescoreBpogsHitesDespachoRetrioCOModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;
            case 'bpogsBoldFrenchFR' :
            foundBasescore = await basescoreBpogsBoldFrenchFRModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;

        case 'igsDaviplataCO' :
            foundBasescore = await basescoreDaviplataCOModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;

        case 'bpogsAMCCO' :
            foundBasescore = await basescoreBpogsAMCCOModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
            newBasescore = await foundBasescore.save();
            
            return newBasescore;

        case 'igsBancoDeOccidenteCO' :
            foundBasescore = await basescoreIgsBancoDeOccidenteCOModel.findOne({_id:id});
            foundBasescore.phrase = phrase ;
            
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


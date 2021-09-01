const { agentsSerFinanzaModel,agentsBancoColombiaModel,
     agentsEnelChileModel,agentsIgsBanorteMXModel,agentsIgsBanistmoPAModel,
     agentsBpogsBoldEnglishUSModel,agentsBpogsHitesDespachoRetrioCOModel,
     agentsBpogsBoldFrenchFRModel,agentsDaviplataCOModel,agentsBpogsAMCCOModel,
     agentsIgsBancoDeOccidenteCOModel,agentsIgsSufiCOModel,
     agentsBpogsHitesFinancieroCOModel, agentsIgsColpatriaCOModel,agentsIgsEntelCLModel,
     agentsIgsPromericaCOModel,agentsIgsBancolombiaAMModel} = require('./model');

async function getAgents( nameDB){
    //const agents = await Model.find();
    var agents;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            agents = await agentsSerFinanzaModel.find();
            return agents;

        case 'igsBancolombiaCO':
            agents = await agentsBancoColombiaModel.find();
            return agents ;

        case 'igsEnelCL':
            agents = await agentsEnelChileModel.find();
            return agents;
        case 'igsBanorteMX' :
            agents = await agentsIgsBanorteMXModel.find();
            return agents;
        case 'igsBanistmoPA' :
            agents = await agentsIgsBanistmoPAModel.find();
            return agents;
        case 'bpogsBoldEnglishUS' :
            agents = await agentsBpogsBoldEnglishUSModel.find();
            return agents;
        case 'bpogsHitesDespachoRetrioCO' :
            agents = await agentsBpogsHitesDespachoRetrioCOModel.find();
            return agents;
        case 'bpogsBoldFrenchFR' :
            agents = await agentsBpogsBoldFrenchFRModel.find();
            return agents;
        case 'igsDaviplataCO' :
            agents = await agentsDaviplataCOModel.find();
            return agents;
        case 'igsDaviplataCO' :
            agents = await agentsDaviplataCOModel.find();
            return agents;
        case 'bpogsAMCCO' :
            agents = await agentsBpogsAMCCOModel.find();
            return agents;
        case 'igsBancoDeOccidenteCO' :
            agents = await agentsIgsBancoDeOccidenteCOModel.find();
            return agents;
        case 'igsSufiCO' :
            agents = await agentsIgsSufiCOModel.find();
            return agents;
        case 'bpogsHitesFinancieroCO' :
            agents = await agentsBpogsHitesFinancieroCOModel.find();
            return agents; 
        case 'igsColpatriaCO' :
            agents = await agentsIgsColpatriaCOModel.find();
            return agents;
            
        case 'igsEntelCL' :
            agents = await agentsIgsEntelCLModel.find();
            return agents;
        case 'igsPromericaCO' :
            agents = await agentsIgsPromericaCOModel.find();
            return agents;
        case 'igsBancolombiaAM' :
            agents = await agentsIgsBancolombiaAMModel.find();
            return agents;                  
                                  
            


    }
    //return agents;
}

function addAgents(agents,nameDB){

    //const myAgents = new Model(agents);
    //myAgents.save(); 

    var myAgents;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            myAgents = new agentsSerFinanzaModel(agents);
            myAgents.save();
            return myAgents;

        case 'igsBancolombiaCO':
            myAgents = new agentsBancoColombiaModel(agents);
            myAgents.save();
            return myAgents ;

        case 'igsEnelCL':
            myAgents = new agentsEnelChileModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsBanorteMX' :
            myAgents = new agentsIgsBanorteMXModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsBanistmoPA' :
            myAgents = new agentsIgsBanistmoPAModel(agents);
            myAgents.save();
            return myAgents;
        case 'bpogsBoldEnglishUS' :
            myAgents = new agentsBpogsBoldEnglishUSModel(agents);
            myAgents.save();
            return myAgents;
        case 'bpogsHitesDespachoRetiroCO' :
            myAgents = new agentsBpogsHitesDespachoRetrioCOModel(agents);
            myAgents.save();
            return myAgents;
        case 'bpogsBoldFrenchFR' :
            myAgents = new agentsBpogsBoldFrenchFRModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsDaviplataCO' :
            myAgents = new agentsDaviplataCOModel(agents);
            myAgents.save();
            return myAgents;
        case 'bpogsAMCCO' :
            myAgents = new agentsBpogsAMCCOModel(agents);
            myAgents.save();
            return myAgents;
            
        case 'igsBancoDeOccidenteCO' :
            myAgents = new agentsIgsBancoDeOccidenteCOModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsSufiCO' :
            myAgents = new agentsIgsSufiCOModel(agents);
            myAgents.save();
            return myAgents;
        case 'bpogsHitesFinancieroCO' :
            myAgents = new agentsBpogsHitesFinancieroCOModel(agents);
            myAgents.save();
            return myAgents;
            
        case 'igsColpatriaCO' :
            myAgents = new agentsIgsColpatriaCOModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsEntelCL' :
            myAgents = new agentsIgsEntelCLModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsPromericaCO' :
            myAgents = new agentsIgsPromericaCOModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsBancolombiaAM' :
            myAgents = new agentsIgsBancolombiaAMModel(agents);
            myAgents.save();
            return myAgents;            
            
            
    }

}

async function updateAgents(id,name,identification,gender,nameDB){
    

    var foundAgents;
    var newAgents;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            foundAgents = await agentsSerFinanzaModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            newAgents = await foundAgents.save();
            return newAgents;

        case 'igsBancolombiaCO':
            foundAgents = await agentsBancoColombiaModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            
            newAgents = await foundAgents.save();
            return newAgents;

        case 'igsEnelCL':
            foundAgents = await agentsEnelChileModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            
            newAgents = await foundAgents.save();
            return newAgents;
        case 'igsBanorteMX' :
            foundAgents = await agentsIgsBanorteMXModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            
            newAgents = await foundAgents.save();
            return newAgents;
        case 'igsBanistmoPA' :
            foundAgents = await agentsIgsBanistmoPAModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
           
            newAgents = await foundAgents.save();
            return newAgents;
        case 'bpogsBoldEnglishUS' :
            foundAgents = await agentsBpogsBoldEnglishUSModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            
            newAgents = await foundAgents.save();
            return newAgents;
        case 'bpogsHitesDespachoRetrioCO' :
            foundAgents = await agentsBpogsHitesDespachoRetrioCOModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            
            newAgents = await foundAgents.save();
            return newAgents; 
            
        case 'bpogsBoldFrenchFR' :
            foundAgents = await agentsBpogsBoldFrenchFRModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
                
            newAgents = await foundAgents.save();
            return newAgents;
        case 'igsDaviplataCO' :
            foundAgents = await agentsDaviplataCOModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
                
            newAgents = await foundAgents.save();
            return newAgents;

        case 'bpogsAMCCO' :
            foundAgents = await agentsBpogsAMCCOModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
                
            newAgents = await foundAgents.save();
            return newAgents;

        case 'igsBancoDeOccidenteCO' :
            foundAgents = await agentsIgsBancoDeOccidenteCOModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
                
            newAgents = await foundAgents.save();
            return newAgents;

        case 'igsSufiCO' :
            foundAgents = await agentsIgsSufiCOModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
                
            newAgents = await foundAgents.save();
            return newAgents;
            
            
        case 'bpogsHitesFinancieroCO' :
                foundAgents = await agentsBpogsHitesFinancieroCOModel.findOne({_id : id});
                foundAgents.name = name ;
                foundAgents.identification = identification ;
                foundAgents.gender = gender ;
                    
                newAgents = await foundAgents.save();
                return newAgents;

        case 'igsColpatriaCO' :
                foundAgents = await agentsIgsColpatriaCOModel.findOne({_id : id});
                foundAgents.name = name ;
                foundAgents.identification = identification ;
                foundAgents.gender = gender ;
                    
                newAgents = await foundAgents.save();
                return newAgents;
        case 'igsEntelCL' :
                foundAgents = await agentsIgsEntelCLModel.findOne({_id : id});
                foundAgents.name = name ;
                foundAgents.identification = identification ;
                foundAgents.gender = gender ;
                    
                newAgents = await foundAgents.save();
                return newAgents;
        case 'igsPromericaCO' :
                foundAgents = await agentsIgsPromericaCOModel.findOne({_id : id});
                foundAgents.name = name ;
                foundAgents.identification = identification ;
                foundAgents.gender = gender ;
                    
                newAgents = await foundAgents.save();
                return newAgents;
                
        case 'igsBancolombiaAM' :
                foundAgents = await agentsIgsBancolombiaAMModel.findOne({_id : id});
                foundAgents.name = name ;
                foundAgents.identification = identification ;
                foundAgents.gender = gender ;
                    
                newAgents = await foundAgents.save();
                return newAgents;        
            
    }
    return newAgents;

}


function removeAgents(id,nameDB){
    // return Model.deleteOne({
    //     _id:id
    // });

    
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            return agentsSerFinanzaModel.deleteOne({_id:id});
            
        case 'igsBancolombiaCO':
            return agentsBancoColombiaModel.deleteOne({_id:id});
            
        case 'igsEnelCL':
            return agentsEnelChileModel.deleteOne({_id:id});
            
        case 'igsBanorteMX' :
            return agentsIgsBanorteMXModel.deleteOne({_id:id});
            
        case 'igsBanistmoPA' :
            return agentsIgsBanistmoPAModel.deleteOne({_id:id});
            
        case 'bpogsBoldEnglishUS' :
            return agentsBpogsBoldEnglishUSModel.deleteOne({_id:id});
            
        case 'bpogsHitesDespachoRetrioCO' :
            return agentsBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
            
        case 'bpogsBoldFrenchFR' :
            return agentsBpogsBoldFrenchFRModel.deleteOne({_id:id});
        case 'igsDaviplataCO' :
            return agentsDaviplataCOModel.deleteOne({_id:id});
            
        case 'bpogsAMCCO' :
            return agentsDaviplataCOModel.deleteOne({_id:id});
        case 'bpogsAMCCO' :
            return agentsBpogsAMCCOModel.deleteOne({_id:id});
        case 'igsBancoDeOccidenteCO' :
            return agentsIgsBancoDeOccidenteCOModel.deleteOne({_id:id});
        case 'igsSufiCO' :
            return agentsIgsSufiCOModel.deleteOne({_id:id});
        case 'bpogsHitesFinancieroCO' :
            return agentsBpogsHitesFinancieroCOModel.deleteOne({_id:id});
        case 'igsColpatriaCO' :
            return agentsIgsColpatriaCOModel.deleteOne({_id:id});
        case 'igsEntelCL' :
            return agentsIgsEntelCLModel.deleteOne({_id:id});
        case 'igsPromericaCO' :
            return agentsIgsPromericaCOModel.deleteOne({_id:id});
        case 'igsBancolombiaAM' :
            return agentsIgsBancolombiaAMModel.deleteOne({_id:id});        
            
                       
    }
}


module.exports = {
    list:getAgents,
    add: addAgents,
    updateText: updateAgents,
    remove:removeAgents,
}
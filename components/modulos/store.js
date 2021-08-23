const { modulesSerFinanzaModel,modulesBancoColombiaModel,modulesEnelChileModel,
    modulesIgsBanorteMXModel,modulesIgsBanistmoPAModel,
    modulesBpogsBoldEnglishUSModel,
    modulesBpogsHitesDespachoRetrioCOModel,modulesBpogsBoldFrenchFRModel,
    modulesDaviplataCOModel,modulesBpogsAMCCOModel,modulesIgsBancoDeOccidenteCOModel,
    modulesIgsSufiCOModel,modulesBpogsHitesFinancieroCOModel,modulesIgsColpatriaCOModel} = require('./model');

async function getModules( nameDB){
   //const agents = await Model.find();
   var modules;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           modules = await modulesSerFinanzaModel.find();
           return modules;

       case 'igsBancolombiaCO':
           modules = await modulesBancoColombiaModel.find();
           return modules ;

       case 'igsEnelCL':
           modules = await modulesEnelChileModel.find();
           return modules;
       case 'igsBanorteMX' :
           modules = await modulesIgsBanorteMXModel.find();
           return modules;
       case 'igsBanistmoPA' :
           modules = await modulesIgsBanistmoPAModel.find();
           return modules;
       case 'bpogsBoldEnglishUS' :
           modules = await modulesBpogsBoldEnglishUSModel.find();
           return modules;
       case 'bpogsHitesDespachoRetrioCO' :
           modules = await modulesBpogsHitesDespachoRetrioCOModel.find();
           return modules;
       case 'bpogsBoldFrenchFR' :
           modules = await modulesBpogsBoldFrenchFRModel.find();
           return modules;
       case 'igsDaviplataCO' :
           modules = await modulesDaviplataCOModel.find();
           return modules;
       case 'igsDaviplataCO' :
           modules = await modulesDaviplataCOModel.find();
           return modules;
       case 'bpogsAMCCO' :
           modules = await modulesBpogsAMCCOModel.find();
           return modules;
       case 'igsBancoDeOccidenteCO' :
           modules = await modulesIgsBancoDeOccidenteCOModel.find();
           return modules;
       case 'igsSufiCO' :
           modules = await modulesIgsSufiCOModel.find();
           return modules;
       case 'bpogsHitesFinancieroCO' :
           modules = await modulesBpogsHitesFinancieroCOModel.find();
           return modules;
           
        case 'igsColpatriaCO' :
            modules = await modulesIgsColpatriaCOModel.find();
            return modules;
                                 
           


   }
   //return agents;
}

function addModules(modules,nameDB){

   //const myAgents = new Model(agents);
   //myAgents.save(); 

   var myModules;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           myModules = new modulesSerFinanzaModel(modules);
           myModules.save();
           return myModules;

       case 'igsBancolombiaCO':
           myModules = new modulesBancoColombiaModel(modules);
           myModules.save();
           return myModules ;

       case 'igsEnelCL':
           myModules = new modulesEnelChileModel(modules);
           myModules.save();
           return myModules;
       case 'igsBanorteMX' :
           myModules = new modulesIgsBanorteMXModel(modules);
           myModules.save();
           return myModules;
       case 'igsBanistmoPA' :
           myModules = new modulesIgsBanistmoPAModel(modules);
           myModules.save();
           return myModules;
       case 'bpogsBoldEnglishUS' :
           myModules = new modulesBpogsBoldEnglishUSModel(modules);
           myModules.save();
           return myModules;
       case 'bpogsHitesDespachoRetiroCO' :
           myModules = new modulesBpogsHitesDespachoRetrioCOModel(modules);
           myModules.save();
           return myModules;
       case 'bpogsBoldFrenchFR' :
           myModules = new modulesBpogsBoldFrenchFRModel(modules);
           myModules.save();
           return myModules;
       case 'igsDaviplataCO' :
           myModules = new modulesDaviplataCOModel(modules);
           myModules.save();
           return myModules;
       case 'bpogsAMCCO' :
           myModules = new modulesBpogsAMCCOModel(modules);
           myModules.save();
           return myModules;
           
       case 'igsBancoDeOccidenteCO' :
           myModules = new modulesIgsBancoDeOccidenteCOModel(modules);
           myModules.save();
           return myModules;
       case 'igsSufiCO' :
           myModules = new modulesIgsSufiCOModel(modules);
           myModules.save();
           return myModules;
       case 'bpogsHitesFinancieroCO' :
           myModules = new modulesBpogsHitesFinancieroCOModel(modules);
           myModules.save();
           return myModules; 
           
           
   }

}

async function updateModules(id,nameCategory,nameModule,nameDB){
   

   var foundModules;
   var newModules;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           foundModules = await modulesSerFinanzaModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;

       case 'igsBancolombiaCO':
           foundModules = await modulesBancoColombiaModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;

       case 'igsEnelCL':
           foundModules = await modulesEnelChileModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;
       case 'igsBanorteMX' :
           foundModules = await modulesIgsBanorteMXModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;
       case 'igsBanistmoPA' :
           foundModules = await modulesIgsBanistmoPAModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;
       case 'bpogsBoldEnglishUS' :
           foundModules = await modulesBpogsBoldEnglishUSModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;
       case 'bpogsHitesDespachoRetrioCO' :
           foundModules = await modulesBpogsHitesDespachoRetrioCOModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules; 
           
       case 'bpogsBoldFrenchFR' :
           foundModules = await modulesBpogsBoldFrenchFRModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;
       case 'igsDaviplataCO' :
           foundModules = await modulesDaviplataCOModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;

       case 'bpogsAMCCO' :
           foundModules = await modulesBpogsAMCCOModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;

       case 'igsBancoDeOccidenteCO' :
           foundModules = await modulesIgsBancoDeOccidenteCOModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;

       case 'igsSufiCO' :
           foundModules = await modulesIgsSufiCOModel.findOne({_id : id});
           foundModules.nameCategory = nameCategory ;
           foundModules.nameModule = nameModule ;
           newModules = await foundModules.save();
           return newModules;
           
           
       case 'bpogsHitesFinancieroCO' :
               foundModules = await modulesBpogsHitesFinancieroCOModel.findOne({_id : id});
               foundModules.nameCategory = nameCategory ;
               foundModules.nameModule = nameModule ;
               newModules = await foundModules.save();
               return newModules;
           
   }
   return newModules;

}


function removeModules(id,nameDB){
   // return Model.deleteOne({
   //     _id:id
   // });

   
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           return modulesSerFinanzaModel.deleteOne({_id:id});
           
       case 'igsBancolombiaCO':
           return modulesBancoColombiaModel.deleteOne({_id:id});
           
       case 'igsEnelCL':
           return modulesEnelChileModel.deleteOne({_id:id});
           
       case 'igsBanorteMX' :
           return modulesIgsBanorteMXModel.deleteOne({_id:id});
           
       case 'igsBanistmoPA' :
           return modulesIgsBanistmoPAModel.deleteOne({_id:id});
           
       case 'bpogsBoldEnglishUS' :
           return modulesBpogsBoldEnglishUSModel.deleteOne({_id:id});
           
       case 'bpogsHitesDespachoRetrioCO' :
           return modulesBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
           
       case 'bpogsBoldFrenchFR' :
           return modulesBpogsBoldFrenchFRModel.deleteOne({_id:id});
       case 'igsDaviplataCO' :
           return modulesDaviplataCOModel.deleteOne({_id:id});
           
       case 'bpogsAMCCO' :
           return modulesDaviplataCOModel.deleteOne({_id:id});
       case 'bpogsAMCCO' :
           return modulesBpogsAMCCOModel.deleteOne({_id:id});
       case 'igsBancoDeOccidenteCO' :
           return modulesIgsBancoDeOccidenteCOModel.deleteOne({_id:id});
       case 'igsSufiCO' :
           return modulesIgsSufiCOModel.deleteOne({_id:id});
       case 'bpogsHitesFinancieroCO' :
           return modulesBpogsHitesFinancieroCOModel.deleteOne({_id:id});
           
                      
   }
}


module.exports = {
   list:getModules,
   add: addModules,
   updateText: updateModules,
   remove:removeModules,
}
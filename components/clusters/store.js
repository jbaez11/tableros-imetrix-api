const { clustersSerFinanzaModel,clustersBancoColombiaModel,clustersEnelChileModel,
    clustersIgsBanorteMXModel,clustersIgsBanistmoPAModel,
    clustersBpogsBoldEnglishUSModel,
    clustersBpogsHitesDespachoRetrioCOModel,clustersBpogsBoldFrenchFRModel,
    clustersDaviplataCOModel,clustersBpogsAMCCOModel,clustersIgsBancoDeOccidenteCOModel,
    clustersIgsSufiCOModel,clustersBpogsHitesFinancieroCOModel} = require('./model');

async function getClusters( nameDB){
   //const agents = await Model.find();
   var clusters;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           clusters = await clustersSerFinanzaModel.find();
           return clusters;

       case 'igsBancolombiaCO':
           clusters = await clustersBancoColombiaModel.find();
           return clusters ;

       case 'igsEnelCL':
           clusters = await clustersEnelChileModel.find();
           return clusters;
       case 'igsBanorteMX' :
           clusters = await clustersIgsBanorteMXModel.find();
           return clusters;
       case 'igsBanistmoPA' :
           clusters = await clustersIgsBanistmoPAModel.find();
           return clusters;
       case 'bpogsBoldEnglishUS' :
           clusters = await clustersBpogsBoldEnglishUSModel.find();
           return clusters;
       case 'bpogsHitesDespachoRetrioCO' :
           clusters = await clustersBpogsHitesDespachoRetrioCOModel.find();
           return clusters;
       case 'bpogsBoldFrenchFR' :
           clusters = await clustersBpogsBoldFrenchFRModel.find();
           return clusters;
       case 'igsDaviplataCO' :
           clusters = await clustersDaviplataCOModel.find();
           return clusters;
       case 'igsDaviplataCO' :
           clusters = await clustersDaviplataCOModel.find();
           return clusters;
       case 'bpogsAMCCO' :
           clusters = await clustersBpogsAMCCOModel.find();
           return clusters;
       case 'igsBancoDeOccidenteCO' :
           clusters = await clustersIgsBancoDeOccidenteCOModel.find();
           return clusters;
       case 'igsSufiCO' :
           clusters = await clustersIgsSufiCOModel.find();
           return clusters;
       case 'bpogsHitesFinancieroCO' :
           clusters = await clustersBpogsHitesFinancieroCOModel.find();
           return clusters;       
                                 
           


   }
   //return agents;
}

function addClusters(clusters,nameDB){

   //const myAgents = new Model(agents);
   //myAgents.save(); 

   var myClusters;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           myClusters = new clustersSerFinanzaModel(clusters);
           myClusters.save();
           return myClusters;

       case 'igsBancolombiaCO':
           myClusters = new clustersBancoColombiaModel(clusters);
           myClusters.save();
           return myClusters ;

       case 'igsEnelCL':
           myClusters = new clustersEnelChileModel(clusters);
           myClusters.save();
           return myClusters;
       case 'igsBanorteMX' :
           myClusters = new clustersIgsBanorteMXModel(clusters);
           myClusters.save();
           return myClusters;
       case 'igsBanistmoPA' :
           myClusters = new clustersIgsBanistmoPAModel(clusters);
           myClusters.save();
           return myClusters;
       case 'bpogsBoldEnglishUS' :
           myClusters = new clustersBpogsBoldEnglishUSModel(clusters);
           myClusters.save();
           return myClusters;
       case 'bpogsHitesDespachoRetiroCO' :
           myClusters = new clustersBpogsHitesDespachoRetrioCOModel(clusters);
           myClusters.save();
           return myClusters;
       case 'bpogsBoldFrenchFR' :
           myClusters = new clustersBpogsBoldFrenchFRModel(clusters);
           myClusters.save();
           return myClusters;
       case 'igsDaviplataCO' :
           myClusters = new clustersDaviplataCOModel(clusters);
           myClusters.save();
           return myClusters;
       case 'bpogsAMCCO' :
           myClusters = new clustersBpogsAMCCOModel(clusters);
           myClusters.save();
           return myClusters;
           
       case 'igsBancoDeOccidenteCO' :
           myClusters = new clustersIgsBancoDeOccidenteCOModel(clusters);
           myClusters.save();
           return myClusters;
       case 'igsSufiCO' :
           myClusters = new clustersIgsSufiCOModel(clusters);
           myClusters.save();
           return myClusters;
       case 'bpogsHitesFinancieroCO' :
           myClusters = new clustersBpogsHitesFinancieroCOModel(clusters);
           myClusters.save();
           return myClusters; 
           
           
   }

}

async function updateClusters(id,nameCategory,nameModule,nameClusters,puntaje,nameDB){
   

   var foundClusters;
   var newClusters;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           foundClusters = await clustersSerFinanzaModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;

       case 'igsBancolombiaCO':
           foundClusters = await clustersBancoColombiaModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;

       case 'igsEnelCL':
           foundClusters = await clustersEnelChileModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;
       case 'igsBanorteMX' :
           foundClusters = await clustersIgsBanorteMXModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;
       case 'igsBanistmoPA' :
           foundClusters = await clustersIgsBanistmoPAModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;
       case 'bpogsBoldEnglishUS' :
           foundClusters = await clustersBpogsBoldEnglishUSModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;
       case 'bpogsHitesDespachoRetrioCO' :
           foundClusters = await clustersBpogsHitesDespachoRetrioCOModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters; 
           
       case 'bpogsBoldFrenchFR' :
           foundClusters = await clustersBpogsBoldFrenchFRModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;
       case 'igsDaviplataCO' :
           foundClusters = await clustersDaviplataCOModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;

       case 'bpogsAMCCO' :
           foundClusters = await clustersBpogsAMCCOModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;

       case 'igsBancoDeOccidenteCO' :
           foundClusters = await clustersIgsBancoDeOccidenteCOModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;

       case 'igsSufiCO' :
           foundClusters = await clustersIgsSufiCOModel.findOne({_id : id});
           foundClusters.nameCategory = nameCategory ;
           foundClusters.nameModule = nameModule ;
           foundClusters.nameClusters = nameClusters ;
           foundClusters.puntaje = puntaje;
           newClusters = await foundClusters.save();
           return newClusters;
           
           
       case 'bpogsHitesFinancieroCO' :
               foundClusters = await clustersBpogsHitesFinancieroCOModel.findOne({_id : id});
               foundClusters.nameCategory = nameCategory ;
               foundClusters.nameModule = nameModule ;
               foundClusters.nameClusters = nameClusters ;
               foundClusters.puntaje = puntaje;
               newClusters = await foundClusters.save();
               return newClusters;
           
   }
   return newClusters;

}


function removeClusters(id,nameDB){
   // return Model.deleteOne({
   //     _id:id
   // });

   
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           return clustersSerFinanzaModel.deleteOne({_id:id});
           
       case 'igsBancolombiaCO':
           return clustersBancoColombiaModel.deleteOne({_id:id});
           
       case 'igsEnelCL':
           return clustersEnelChileModel.deleteOne({_id:id});
           
       case 'igsBanorteMX' :
           return clustersIgsBanorteMXModel.deleteOne({_id:id});
           
       case 'igsBanistmoPA' :
           return clustersIgsBanistmoPAModel.deleteOne({_id:id});
           
       case 'bpogsBoldEnglishUS' :
           return clustersBpogsBoldEnglishUSModel.deleteOne({_id:id});
           
       case 'bpogsHitesDespachoRetrioCO' :
           return clustersBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
           
       case 'bpogsBoldFrenchFR' :
           return clustersBpogsBoldFrenchFRModel.deleteOne({_id:id});
       case 'igsDaviplataCO' :
           return clustersDaviplataCOModel.deleteOne({_id:id});
           
       case 'bpogsAMCCO' :
           return clustersDaviplataCOModel.deleteOne({_id:id});
       case 'bpogsAMCCO' :
           return clustersBpogsAMCCOModel.deleteOne({_id:id});
       case 'igsBancoDeOccidenteCO' :
           return clustersIgsBancoDeOccidenteCOModel.deleteOne({_id:id});
       case 'igsSufiCO' :
           return clustersIgsSufiCOModel.deleteOne({_id:id});
       case 'bpogsHitesFinancieroCO' :
           return clustersBpogsHitesFinancieroCOModel.deleteOne({_id:id});
           
                      
   }
}


module.exports = {
   list:getClusters,
   add: addClusters,
   updateText: updateClusters,
   remove:removeClusters,
}
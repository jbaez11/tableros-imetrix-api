const { categoriasSerFinanzaModel,categoriasBancoColombiaModel,categoriasEnelChileModel,
    categoriasIgsBanorteMXModel,categoriasIgsBanistmoPAModel,
    categoriasBpogsBoldEnglishUSModel,
    categoriasBpogsHitesDespachoRetrioCOModel,categoriasBpogsBoldFrenchFRModel,
    categoriasDaviplataCOModel,categoriasBpogsAMCCOModel,categoriasIgsBancoDeOccidenteCOModel,
    categoriasIgsSufiCOModel,categoriasBpogsHitesFinancieroCOModel,
    categoriasIgsColpatriaCOModel} = require('./model');

async function getBaseCategories( nameDB){
   //const agents = await Model.find();
   var categorias;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           categorias = await categoriasSerFinanzaModel.find();
           return categorias;

       case 'igsBancolombiaCO':
           categorias = await categoriasBancoColombiaModel.find();
           return categorias ;

       case 'igsEnelCL':
           categorias = await categoriasEnelChileModel.find();
           return categorias;
       case 'igsBanorteMX' :
           categorias = await categoriasIgsBanorteMXModel.find();
           return categorias;
       case 'igsBanistmoPA' :
           categorias = await categoriasIgsBanistmoPAModel.find();
           return categorias;
       case 'bpogsBoldEnglishUS' :
           categorias = await categoriasBpogsBoldEnglishUSModel.find();
           return categorias;
       case 'bpogsHitesDespachoRetrioCO' :
           categorias = await categoriasBpogsHitesDespachoRetrioCOModel.find();
           return categorias;
       case 'bpogsBoldFrenchFR' :
           categorias = await categoriasBpogsBoldFrenchFRModel.find();
           return categorias;
       case 'igsDaviplataCO' :
           categorias = await categoriasDaviplataCOModel.find();
           return categorias;
       case 'igsDaviplataCO' :
           categorias = await categoriasDaviplataCOModel.find();
           return categorias;
       case 'bpogsAMCCO' :
           categorias = await categoriasBpogsAMCCOModel.find();
           return categorias;
       case 'igsBancoDeOccidenteCO' :
           categorias = await categoriasIgsBancoDeOccidenteCOModel.find();
           return categorias;
       case 'igsSufiCO' :
           categorias = await categoriasIgsSufiCOModel.find();
           return categorias;
       case 'bpogsHitesFinancieroCO' :
           categorias = await categoriasBpogsHitesFinancieroCOModel.find();
           return categorias;
        case 'igsColpatriaCO' :
           categorias = await categoriasIgsColpatriaCOModel.find();
           return categorias;       
                                 
           


   }
   //return agents;
}

function addBaseCategories(categorias,nameDB){

   //const myAgents = new Model(agents);
   //myAgents.save(); 

   var myCategorias;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           myCategorias = new categoriasSerFinanzaModel(categorias);
           myCategorias.save();
           return myCategorias;

       case 'igsBancolombiaCO':
           myCategorias = new categoriasBancoColombiaModel(categorias);
           myCategorias.save();
           return myCategorias ;

       case 'igsEnelCL':
           myCategorias = new categoriasEnelChileModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'igsBanorteMX' :
           myCategorias = new categoriasIgsBanorteMXModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'igsBanistmoPA' :
           myCategorias = new categoriasIgsBanistmoPAModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'bpogsBoldEnglishUS' :
           myCategorias = new categoriasBpogsBoldEnglishUSModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'bpogsHitesDespachoRetiroCO' :
           myCategorias = new categoriasBpogsHitesDespachoRetrioCOModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'bpogsBoldFrenchFR' :
           myCategorias = new categoriasBpogsBoldFrenchFRModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'igsDaviplataCO' :
           myCategorias = new categoriasDaviplataCOModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'bpogsAMCCO' :
           myCategorias = new categoriasBpogsAMCCOModel(categorias);
           myCategorias.save();
           return myCategorias;
           
       case 'igsBancoDeOccidenteCO' :
           myCategorias = new categoriasIgsBancoDeOccidenteCOModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'igsSufiCO' :
           myCategorias = new categoriasIgsSufiCOModel(categorias);
           myCategorias.save();
           return myCategorias;
       case 'bpogsHitesFinancieroCO' :
           myCategorias = new categoriasBpogsHitesFinancieroCOModel(categorias);
           myCategorias.save();
           return myCategorias; 
           
           
   }

}

async function updateBaseCategories(id,name,qualifying,nameDB){
   

   var foundBaseCategories;
   var newBaseCategories;
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           foundBaseCategories = await categoriasSerFinanzaModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;

       case 'igsBancolombiaCO':
           foundBaseCategories = await categoriasBancoColombiaModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;

       case 'igsEnelCL':
           foundBaseCategories = await categoriasEnelChileModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;
       case 'igsBanorteMX' :
           foundBaseCategories = await categoriasIgsBanorteMXModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;
       case 'igsBanistmoPA' :
           foundBaseCategories = await categoriasIgsBanistmoPAModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;
       case 'bpogsBoldEnglishUS' :
           foundBaseCategories = await categoriasBpogsBoldEnglishUSModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;
       case 'bpogsHitesDespachoRetrioCO' :
           foundBaseCategories = await categoriasBpogsHitesDespachoRetrioCOModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories; 
           
       case 'bpogsBoldFrenchFR' :
           foundBaseCategories = await categoriasBpogsBoldFrenchFRModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;
       case 'igsDaviplataCO' :
           foundBaseCategories = await categoriasDaviplataCOModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;

       case 'bpogsAMCCO' :
           foundBaseCategories = await categoriasBpogsAMCCOModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;

       case 'igsBancoDeOccidenteCO' :
           foundBaseCategories = await categoriasIgsBancoDeOccidenteCOModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;

       case 'igsSufiCO' :
           foundBaseCategories = await categoriasIgsSufiCOModel.findOne({_id : id});
           foundBaseCategories.name = name ;
           foundBaseCategories.qualifying = qualifying ;
           newBaseCategories = await foundBaseCategories.save();
           return newBaseCategories;
           
           
       case 'bpogsHitesFinancieroCO' :
               foundBaseCategories = await categoriasBpogsHitesFinancieroCOModel.findOne({_id : id});
               foundBaseCategories.name = name ;
               foundBaseCategories.qualifying = qualifying ;
               newBaseCategories = await foundBaseCategories.save();
               return newBaseCategories;
           
   }
   return newBaseCategories;

}


function removeBaseCategories(id,nameDB){
   // return Model.deleteOne({
   //     _id:id
   // });

   
   switch (nameDB) {
       
       case 'igsSerfinanzaCO':
           return categoriasSerFinanzaModel.deleteOne({_id:id});
           
       case 'igsBancolombiaCO':
           return categoriasBancoColombiaModel.deleteOne({_id:id});
           
       case 'igsEnelCL':
           return categoriasEnelChileModel.deleteOne({_id:id});
           
       case 'igsBanorteMX' :
           return categoriasIgsBanorteMXModel.deleteOne({_id:id});
           
       case 'igsBanistmoPA' :
           return categoriasIgsBanistmoPAModel.deleteOne({_id:id});
           
       case 'bpogsBoldEnglishUS' :
           return categoriasBpogsBoldEnglishUSModel.deleteOne({_id:id});
           
       case 'bpogsHitesDespachoRetrioCO' :
           return categoriasBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
           
       case 'bpogsBoldFrenchFR' :
           return categoriasBpogsBoldFrenchFRModel.deleteOne({_id:id});
       case 'igsDaviplataCO' :
           return categoriasDaviplataCOModel.deleteOne({_id:id});
           
       case 'bpogsAMCCO' :
           return categoriasDaviplataCOModel.deleteOne({_id:id});
       case 'bpogsAMCCO' :
           return categoriasBpogsAMCCOModel.deleteOne({_id:id});
       case 'igsBancoDeOccidenteCO' :
           return categoriasIgsBancoDeOccidenteCOModel.deleteOne({_id:id});
       case 'igsSufiCO' :
           return categoriasIgsSufiCOModel.deleteOne({_id:id});
       case 'bpogsHitesFinancieroCO' :
           return categoriasBpogsHitesFinancieroCOModel.deleteOne({_id:id});
           
                      
   }
}


module.exports = {
   list:getBaseCategories,
   add: addBaseCategories,
   updateText: updateBaseCategories,
   remove:removeBaseCategories,
}
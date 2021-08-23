const store = require('./store');

function getModules(dbname){
    return new Promise((resolve,reject) => {
        //console.log(store.list())
        resolve(store.list(dbname));  
    });
}

function addModules(nameCategory,nameModule,dbname){
    
     
    return new Promise((resolve,reject) => {
        if(!nameCategory || !nameModule ){
            console.log('[Message Controller] no hay nameCategory o nameModule');
            reject('Los datos son incorrectos');
            return false;
        }

        const  fullAgents = {
            nameCategory:nameCategory,
            nameModule:nameModule,
            
        }
        store.add(fullAgents,dbname);
        resolve(fullAgents,dbname);
        
    })
    
}

function updateModules(id, nameCategory,nameModule,dbname){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('name', nameCategory);
        console.log('nameModule' , nameModule);
        
        if(!id || !nameCategory || !nameModule  ){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,nameCategory,nameModule,dbname);

        resolve(result,dbname);
    })
}

function deleteModules(id,dbname){
    return new Promise((resolve,reject) => {
        if(!id){
            reject('ID Invalido');
            return false;
        }
        store.remove(id,dbname)
            .then(()=> {
                resolve();
            })
            .catch(e => {
                reject(e)
            });
    });
}
module.exports = {
    getModules,
    addModules,
    updateModules,
    deleteModules,
}
const store = require('./store');

function getBaseCategories(dbname){
    return new Promise((resolve,reject) => {
        //console.log(store.list())
        resolve(store.list(dbname));  
    });
}

function addBaseCategories(name,qualifying,dbname){
    
     
    return new Promise((resolve,reject) => {
        if(!name || !qualifying ){
            console.log('[Message Controller] no hay name o qualifying');
            reject('Los datos son incorrectos');
            return false;
        }

        const  fullAgents = {
            name:name,
            qualifying:qualifying,
            
        }
        store.add(fullAgents,dbname);
        resolve(fullAgents,dbname);
        
    })
    
}

function updateBaseCategories(id, name,qualifying,dbname){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('name', name);
        console.log('qualifying' , qualifying);
        
        if(!id || !name || !qualifying  ){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,name,qualifying,dbname);

        resolve(result,dbname);
    })
}

function deleteBaseCategories(id,dbname){
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
    getBaseCategories,
    addBaseCategories,
    updateBaseCategories,
    deleteBaseCategories,
}
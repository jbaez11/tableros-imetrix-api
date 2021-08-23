const store = require('./store');

function getBasescore(filterBasescore,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterBasescore,dbname));  
    });
}

function addBasescore(infaltable,dbname){
    
    return new Promise((resolve,reject) => {
        if(!infaltable){
            console.log('[Message Controller] no hay infaltable');
            reject('Los datos son incorrectos');
            return false;
        }
            const  fullBasescore = {
                infaltable:infaltable,
                
                
            }
            store.add(fullBasescore,dbname);
            resolve(fullBasescore,dbname);
      
    })
    
}
function updateBasescore(id, infaltable,dbname){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('infaltable', infaltable);
        
        
        
        if(!id || !infaltable ){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,infaltable,dbname);

        resolve(result);
    })
}
function deleteBasescore(id,dbname){
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
    getBasescore,
    addBasescore,
    updateBasescore,
    deleteBasescore,
   
}


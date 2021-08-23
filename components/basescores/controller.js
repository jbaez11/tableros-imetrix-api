const store = require('./store');

function getBasescore(dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(dbname));  
    });
}
 
function addBasescore(category,modulo,clusters,dbname){
    
    return new Promise((resolve,reject) => {
        category='infaltable'
        console.log('category', category);
        console.log('modulo', modulo);
        console.log('clusters', clusters);

        if(!category || !modulo || !clusters ){
            console.log('[Message Controller] no hay infaltable');
            reject('Los datos son incorrectos');
            return false;
        }
            const  fullBasescore = {
                category : category,
                modulo : modulo,
                clusters : clusters

            }
            store.add(fullBasescore,dbname);
            resolve(fullBasescore,dbname);
      
    })
    
}
function updateBasescore(id, category,modulo,dbname){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('category', category);
        console.log('modulo', modulo);
        
        
        
        
        if(!id || !category || !modulo ){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,category,modulo,dbname);

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


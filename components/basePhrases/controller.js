const store = require('./store');

 function getBasePhrases(dbname){
    return  new Promise((resolve,reject) => {
        resolve(store.list(dbname));  
    });
}

function addBasePhrases(phrase,module,category,dbname){
    
    return new Promise((resolve,reject) => {
        if(!phrase || !module || !category){
            console.log('[Message Controller] no hay Phrase o module o category');
            reject('Los datos son incorrectos');
            return false;
        }
            const  fullBasePhrases = {
                phrase:phrase,
                module:module,
                category:category,
                
            }
            store.add(fullBasePhrases,dbname);
            resolve(fullBasePhrases,dbname);
      
    })
    
}

function updateBasePhrases(id, phrase,module,category,dbname){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('phrase', phrase);
        console.log('module' , module);
        console.log('category', category);
        
        
        if(!id || !phrase || !module || !category ){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,phrase,module,category,dbname);

        resolve(result);
    })
}
function deleteBasePhrases(id,dbname){
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
    getBasePhrases,
    addBasePhrases,
    updateBasePhrases,
    deleteBasePhrases,
}
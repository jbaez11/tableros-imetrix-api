const store = require('./store');


function getBaseKeywords(dbname){
    return new Promise((resolve,reject) => {
        //console.log(store.list.length)
        resolve(store.list(dbname));  
    });
}

function addBaseKeywords(keyword,category,module,cluster,dbname){

    return new Promise((resolve,reject) => {
        if(!keyword || !category || !module || !cluster){
            console.log('[Message Controller] no hay keyword o module o category');
            reject('Los datos son incorrectos');
            return false;
        }
        
        const  fullBaseKeywords = {
            keyword:keyword,
            category: category,
            module:module,
            cluster:cluster
        }
        store.add(fullBaseKeywords,dbname);
        resolve(fullBaseKeywords,dbname);

    })
    
}

function updateBaseKeywords(id, keyword,category,module,cluster,dbname){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('keyword', keyword);
        console.log('module' , module);
        console.log('category', category);
        console.log('cluster', cluster);
        
        if(!id || !keyword || !category || !module || !cluster){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,keyword,category,module,cluster,dbname);

        resolve(result,dbname);
    })
}

function deleteBaseKeywords(id,dbname){
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
    getBaseKeywords,
    addBaseKeywords,
    updateBaseKeywords,
    deleteBaseKeywords,
}
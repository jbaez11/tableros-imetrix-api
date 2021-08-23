const store = require('./store');

function getAsesores(filterAgentsAudit,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterAgentsAudit,dbname));  
    });
}

module.exports = {
    getAsesores,
   
}


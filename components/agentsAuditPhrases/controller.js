const store = require('./store');

function getAsesoresPhrases(filterAgentsAuditPhrases,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterAgentsAuditPhrases,dbname));  
    });
}

module.exports = {
    getAsesoresPhrases,
   
}


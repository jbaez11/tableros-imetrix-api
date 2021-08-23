const store = require('./store');

function getConversations(filterConversations,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterConversations,dbname));  
    });
}

module.exports = {
    getConversations,
   
}
 

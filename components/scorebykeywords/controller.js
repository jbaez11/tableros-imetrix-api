const store = require('./store');

function getScore(filterScore,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterScore,dbname));  
    });
}

module.exports = {
    getScore,
   
}


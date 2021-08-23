const store = require('./store');

function getStadisticOfKeywords(filterStadisticOfKeywords,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterStadisticOfKeywords,dbname));  
    });
}

module.exports = {
    getStadisticOfKeywords,
   
}


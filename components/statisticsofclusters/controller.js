const store = require('./store');

function getstatisticsOfClusters(filterstatisticsOfClusters,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterstatisticsOfClusters,dbname));  
    });
}

module.exports = {
    getstatisticsOfClusters,
   
}


const store = require('./store');

function getAuditkeywordstatistics(filterAuditkeywordstatistics,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterAuditkeywordstatistics,dbname));  
    });
}

module.exports = {
    getAuditkeywordstatistics,
   
}


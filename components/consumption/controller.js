const store = require('./store');

function getConsumption(filterConsumption,dbname){
    return new Promise((resolve,reject) => {
        // store.list()
        // .then(lista=>{
        //     console.log(lista)
        // });
        //console.log(store.list())
        resolve(store.list(filterConsumption,dbname));  
    });
}

module.exports = {
    getConsumption,
}
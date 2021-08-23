const store = require('./store');

function getScoringkeywords(filterScoringKeywords,dbname){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterScoringKeywords,dbname));  
    });
}

module.exports = {
    getScoringkeywords,
   
}
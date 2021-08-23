const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filterstatisticsOfClusters = req.query.eventDate || null;
    
    console.log('filter statisticsOfClusters ',filterstatisticsOfClusters)
    

    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.getstatisticsOfClusters(filterstatisticsOfClusters,dbname)
    .then((statisticsOfClustersList) => {
        response.success(req,res, statisticsOfClustersList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;
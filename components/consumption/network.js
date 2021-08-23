const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filterConsumption = req.query.yearMonthString || null;

    console.log('filter agents ', filterConsumption)

    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.getConsumption(filterConsumption,dbname)
    .then((consumptionList) => {
        response.success(req,res, consumptionList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;
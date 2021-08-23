const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filterAuditkeywordstatistics = req.query.eventDate || null;
    console.log('filter agents ',filterAuditkeywordstatistics)
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;
    controller.getAuditkeywordstatistics(filterAuditkeywordstatistics,dbname)
    .then((auditkeywordstatisticsList) => {
        response.success(req,res, auditkeywordstatisticsList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filterConversations = req.query.keyfile || null;
    console.log('filter agents ',filterConversations)
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;
    controller.getConversations(filterConversations,dbname)
    .then((conversationsList) => {
        response.success(req,res, conversationsList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;
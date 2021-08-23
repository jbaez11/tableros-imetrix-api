const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;
    controller.getBaseKeywords(dbname)
    .then((baseKeywordsList) => {
        response.success(req,res, baseKeywordsList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

router.post('/', function(req,res){
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.addBaseKeywords(req.body.keyword,req.body.category, req.body.module,req.body.cluster,dbname)
        .then((fullBaseKeywords) => {
            response.success(req,res, fullBaseKeywords, 201 );
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'error en el controller post');
        })
});

router.patch('/:id', function(req,res){
   // variable de peticion
   console.log('locals : ', res.locals.path_data_link );
   dbname = res.locals.path_data_link;

    controller.updateBaseKeywords(req.params.id, req.body.keyword, req.body.category, req.body.module,req.body.cluster,dbname)
        .then((data) => {
            response.success(req,res,data,200);

        })
        .catch(e => {
            response.error(req,res, 'Error interno',500,e)
        });
});

router.delete('/:id', function(req,res){
    // variable de peticion
   console.log('locals : ', res.locals.path_data_link );
   dbname = res.locals.path_data_link;
    controller.deleteBaseKeywords(req.params.id,dbname)
        .then(() => {
            response.success(req,res, `BaseKeywords ${req.params.id} eliminado `,200);
        })
        .catch(e => {
            response.error(req,res, 'Error Interno', 500, e);
        });
});

module.exports = router;

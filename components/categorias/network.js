const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.getBaseCategories(dbname)
    .then((baseCategoriesList) => {
        response.success(req,res, baseCategoriesList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

router.post('/', function(req,res){
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.addBaseCategories(req.body.name, req.body.qualifying,dbname)
        .then((fullBaseagents) => {0
            response.success(req,res, fullBaseagents, 201 );
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'error en el controller post');
        })
});

router.patch('/:id', function(req,res){
   
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.updateBaseCategories(req.params.id, req.body.name, req.body.qualifying,dbname)
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

    controller.deleteBaseCategories(req.params.id,dbname)
        .then(() => {
            response.success(req,res, `Agent ${req.params.id} eliminado `,200);
        })
        .catch(e => {
            response.error(req,res, 'Error Interno', 500, e);
        });
});

module.exports = router;

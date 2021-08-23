const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;
    controller.getBasePhrases(dbname)
    .then((basePhrasesList) => {
        response.success(req,res, basePhrasesList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

router.post('/', function(req,res){
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.addBasePhrases(req.body.phrase, req.body.module, req.body.category,dbname)
        .then((fullBasePhrases) => {
            response.success(req,res, fullBasePhrases, 201 );
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'error en el controller post');
        })
});

router.patch('/:id', function(req,res){
   
    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.updateBasePhrases(req.params.id, req.body.phrase, req.body.module, req.body.category,dbname)
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

    controller.deleteBasePhrases(req.params.id,dbname)
        .then(() => {
            response.success(req,res, `BasePhrases ${req.params.id} eliminado `,200);
        })
        .catch(e => {
            response.error(req,res, 'Error Interno', 500, e);
        });
});




module.exports = router;
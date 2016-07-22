var express = require('express');
var router = express.Router();

/*  Envio Column por columna*/
router.get('/allColumn', function(req, res, next) {

});

/*  Obtener Column por columna */
router.get('/getColumn:idColumn:idKanban', function(req, res, next) {

});

/*    Actualizar Column por columna*/
router.update('/updateColumn:idColumn:idKanban',function(req, res, next)){

});

/*    Actualizar movimiento Column por columna*/
router.update('/moveColumn:idColumn:idKanban',function(req, res, next)){

});

/*    Eliminar Column idCOlumn */
router.delete('/deleteColumn:idColumn:idKanban',function(req, res, next){

})

module.exports = router;

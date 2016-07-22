var express = require('express');
var router = express.Router();

/*  Envio cartas por columna*/
router.get('/allCards', function(req, res, next) {

});

/*  Obtener card por columna */
router.get('/getCard:idCard:idColumn', function(req, res, next) {

});

/*    Actualizar card por columna*/
router.update('/updateCard:idCard:idColumn',function(req, res, next)){

});

/*    Actualizar movimiento card por columna*/
router.update('/moveCard:idCard:idColumn:idNewColumn',function(req, res, next)){

});

/*    Eliminar Card idCOlumn */
router.delete('/deleteCard:idCard:idColumn',function(req, res, next){

})

module.exports = router;

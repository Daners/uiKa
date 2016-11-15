var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/tareasTemplate', function(req, res, next) {
  res.render('tareas');
});

router.get('/columnasTemplate', function(req, res, next) {
  res.render('columnas');
});

router.get('/menuTemplate', function(req, res, next) {
  res.render('menu');
});


router.get('/tablero/1', function(req, res, next) {
  res.send(dashboard);
});


var dashboard = {
    name: "Aereos Desarrollo",
    columns: [{
        title: "Task",
        color: "panel-scrum-g",
        cards: [{
            tittle: "Aereos",
            desc: "terminar aereos"
        }, {
            tittle: "Correccion",
            desc: "resolver #03 defetos"
        }]
    }, {
        title: "In progress",
        color: "panel-scrum-blue",
        cards: [{
            tittle: "Master",
            desc: "CC. validacion Modecode"
        }, {
            tittle: "Manifiesto",
            desc: "estimacion "
        }, {
            tittle: "Privados",
            desc: "separar modelo "
        }]
    }, {
        title: "Done",
        color: "panel-scrum-y",
        cards: []
    }, {
        title: "PeerReview",
        color: "panel-scrum-r",
        cards: [{
            tittle: "Envio ACIA",
            desc: "revisar"
        }, {
            tittle: "Reenvio RF",
            desc: "Observar como se reenvia"
        }]
    }]

}

module.exports = router;

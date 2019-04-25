var express = require('express');
var router = express.Router();
const controllers = require('./controllers')

/* GET home page. */
router.get('/', controllers.getAll)
router.post('/', controllers.create)
router.post('/:profileId', controllers.delete)
router.post('/:profileId/complete', controllers.complete)

module.exports = router;

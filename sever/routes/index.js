const router = require('express').Router()
const controllers = require('./controllers')

/* GET home page. */
router.get('/', controllers.getAll)
router.post('/', controllers.create)
router.post('/:profileId', controllers.deleteItem)
router.post('/:profileId/complete', controllers.complete)
// router.get('/:profileId',controllers.getById)
router.post('/:profileId',controllers.editById)
module.exports = router;

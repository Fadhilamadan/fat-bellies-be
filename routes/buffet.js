const router = require('express').Router();

const BuffetController = require('../controllers/BuffetController');

router.get('/', BuffetController.buffetList);
router.get('/:id', BuffetController.buffetDetail);
router.post('/', BuffetController.buffetStore);
router.put('/:id', BuffetController.buffetUpdate);
router.delete('/:id', BuffetController.buffetDelete);

module.exports = router;

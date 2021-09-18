const router = require('express').Router();

const BranchController = require('../controllers/BranchController');

router.get('/', BranchController.branchList);
router.get('/:id', BranchController.branchDetail);
router.post('/', BranchController.branchStore);
router.put('/:id', BranchController.branchUpdate);
router.delete('/:id', BranchController.branchDelete);

module.exports = router;

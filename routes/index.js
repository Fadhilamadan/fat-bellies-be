const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    name: 'Fat Bellies',
    version: '1.0.0',
  });
});

module.exports = router;

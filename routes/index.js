const router = require('koa-router')();
const IndexController = require('../controllers/index');

// router.prefix('/music');
router.get('/index', IndexController.Index);
// router.get('/mock', IndexController.Mock);

module.exports = router;
/*
 * @Description: 路由 
 */
const router = require('koa-router')();
const Index = require('./index');


router.use('/api', Index.routes(), Index.allowedMethods());


module.exports = router;
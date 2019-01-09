const result = require('../models/return');
const Index = require('../models/index');
const sql = require('../models/sql');

let IndexController = {
    async Index(ctx, next) {
        let banner = await new Index(sql.Index.banner).banner();
        let channel = await new Index(sql.Index.channel).channel();
        let data = {
            banner: banner,
            channel: channel
        }
        ctx.body = result.success(data);
    }
};

module.exports = IndexController;
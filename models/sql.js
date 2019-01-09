/*
 * @Description: sql语句统一存放 
 */
module.exports = {
    //首页
    Index: {
        banner: `SELECT name as title,link,image_url as image FROM nideshop_ad a WHERE a.ad_position_id = '1'`,
        channel: `SELECT name,url,icon_url FROM nideshop_channel c ORDER BY c.sort_order ASC`
    }
}
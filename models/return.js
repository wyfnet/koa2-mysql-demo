/*
 * @Description: 封装统一返回状态码 
 */
let result = {
    success(data) {
        return {
            returnCode: '000000',
            returnDesc: 'success',
            data: data
        }
    }
};
module.exports = result;
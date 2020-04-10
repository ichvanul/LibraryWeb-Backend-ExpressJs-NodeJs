const MiscHelper = require('./helpers')
const redis = require('redis');
const client = redis.createClient(process)

module.exports = {
    cacheGetAllbooks: (req, res, next) => {
        client.get('getallbooks', (err, data)=>{
            if (err) throw err;

            if (data !== null) {
                MiscHelper.response(res, JSON.parse(data), 200);
            }else{
                next();
            }
        })
    },
    clearGetAllBooks: (req, res, next) => {
        client.del('getallbooks');
        
    }
}
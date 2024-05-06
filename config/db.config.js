
module.exports = {
    HOST: 'localhost',
    USER : 'root',
    port:8081,
    PASSWORD :'Root@125502', 
    DB : 'rgpv_backend',
    dialect : 'mysql',
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
}

const redis = require('redis');
const redisHost = process.env.REDIS_HOST || 'localhost';
const redisPort = process.env.REDIS_PORT || 6379;

// const redisClient = redis.createClient({
//   host: redisHost,
//   port: redisPort,
// });

//   (async () => {
//    await redisClient.connect();
//    console.log("Redis Connected");
//   })();
  
//   redisClient.on("error", function (err) {
//     console.error("Redis error:", err);
//   });
 
// exports.redisClient = redisClient;

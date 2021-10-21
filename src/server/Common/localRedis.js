const redis = require("redis");
const connection = {
    host : "127.0.0.1",
    port : "6379",
    password : "231510622abc",
}

const saveData = (key="test",value="test")=>{
    const client = redis.createClient(connection);
    client.set(key,value);
    client.quit();
    return true;
}

const readData = (key="test",callback)=>{
    const client = redis.createClient(connection);
    client.get(key,(err,data)=>{
        callback(err,data)
    });
    client.quit();
    return true;
}

module.exports={
    saveData,
    readData,
}
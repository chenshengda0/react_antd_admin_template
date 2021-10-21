/*引入express框架*/
const express = require("express");
const app = express();
/*引入cors*/
const cors = require('cors');
app.use(cors());
const router = require("./Api")

app.listen(8080,()=>{
    console.log("服务器已启动");
})
//默认
app.get("/",(req,res)=>{
    res.send("<h1>服务器已启动</h1>");
});

//带模块
app.use("/api",router);


//退出前释放资源
process.on('SIGINT', () => {
    console.log("exit now");
    process.exit();
});

process.setMaxListeners(0);
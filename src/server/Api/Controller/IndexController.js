const {consumer,publish} = require("../../Common/localRabbitmq");
const UserModel = require("../Models/UserModel")
const {saveData,readData} = require("../../Common/localRedis");

const IndexController = {
    home:(req,res)=>{
        saveData("test","123456");
        readData("test",(err,data)=>{
            console.log(`line9--${data}`);
        });
        consumer("getUserList",(error,msg)=>{
            try{
                if(error) throw error;
                if(!msg) throw new Error("未定义消息");
                return res.json({
                    code : 200,
                    message:"success",
                    data : JSON.parse( msg.content.toString() ),
                }); 
            }catch(err){
                return res.json({
                    code : 400,
                    message:"fail",
                    data : [],
                });
            }
        });
    },
    getUserList : (req,res)=>{
        try{
            UserModel.getUserList( (data = [])=>{
                publish("getUserList",data);
                res.json({
                    code:200,
                    message:"SUCCESS",
                    data : [...data],
                });
            } )
        }catch(err){
            res.json({
                code:400,
                message:err.message,
                data : [],
            });
        }
    },
}

module.exports = IndexController;
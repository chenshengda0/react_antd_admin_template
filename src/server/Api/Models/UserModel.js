const {query} = require("../../Common/localMysql")
const UserModel = {
    getUserList : (callback)=>{
        const sql = `select id,name,sex,(case when sex = 1 then '男' else '女' end) as sex_title from local_test`;
        query(sql,(err,results)=>{
            try{
                if(err) throw err;
                callback(results);
            }catch(err){
                throw err;
            }
        })
    },
}

module.exports = UserModel;
import {
    adminList,
    base64_encode,
    des_encode,
} from "./common"

export const toLogin =(url,config)=>{
    try{
        const resData = adminList;
        const {
            username,
            password,
            code,
        } = JSON.parse(config.body);
        const current=resData.find( item => item.username === username ) || false;
        if( !current ){
            throw new Error("未查询到账号，登陆失败");
        }
        if( current.password !== password ){
            throw new Error("密码错误，登陆失败");
        }
        if( current.code !== code ){
            throw new Error("验证码错误，登陆失败");
        }
        return {
            code : 200,
            message : "SUCCESS",
            data : base64_encode( des_encode(JSON.stringify(current)) ),
        }
    }catch(err){
        return {
            code: 400,
            message : err.message,
            data : "",
        }
    }
}
import CryptoJS from "crypto-js"
import {Base64} from "js-base64"

export const adminList = [
    {
        username : "admin",
        password : "admin",
        code : "admin",
    },
    {
        username : "guest",
        password : "guest",
        code : "guest",
    }
];

export const des_encode = (param="",key = "login")=>{
    try{
        const keyHex = CryptoJS.enc.Utf8.parse(key);
        if(param){
            let encrypted = CryptoJS.DES.encrypt(param,keyHex,{
                mode: CryptoJS.mode.ECB,        //模式
                padding: CryptoJS.pad.Pkcs7,    //填充
            });
            const return_data = encrypted.ciphertext.toString() || false;
            if( !return_data ){
                throw new Error("加密失败");
            }
            return return_data;
        }
        throw new Error("请输入要加密的字符串");
    }catch(err){
        return false;
    }
}

export const des_decode = (param="",key = "login")=>{
    try{
        const keyHex = CryptoJS.enc.Utf8.parse(key);
        if(param){
            let decrypted = CryptoJS.DES.decrypt({
                ciphertext: CryptoJS.enc.Hex.parse(param)
            },keyHex,{
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
            })
            const return_data = decrypted.toString(CryptoJS.enc.Utf8) || false;
            if( !return_data ){
                throw new Error("解密失败");
            }
            return return_data;
        }else{
            throw new Error("请输入要解密的字符串");
        }
    }catch(err){
        return false;
    }

}

export const base64_encode = (param = "test")=>{
    return Base64.encode(param);
}

export const base64_decode = (param = "")=>{
    return Base64.decode(param);
}

export const checkAuth = (headers)=>{
    try{
        const user_list = adminList;
        const {
            Authorization,
        } = headers;
        const userInfo = des_decode( base64_decode(Authorization) );
        if( !userInfo ){
            throw new Error("权限校验失败");
        }
        const userInfoJson = JSON.parse(userInfo);
        const current_user = user_list.find( item => {
            return userInfoJson.username === item.username && userInfoJson.password === item.password && userInfoJson.code === item.code ? true : false;
        } ) || false;
        if( !current_user ){
            throw new Error("未查询到用户，权限校验失败");
        }
        return true;
    }catch(err){
        console.log(err)
        return false;
    }
}
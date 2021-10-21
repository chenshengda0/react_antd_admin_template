import { message } from "antd";
import CryptoJS from "crypto-js"
import {Base64} from "js-base64"

window.base64_encode = (param = "test")=>{
    return Base64.encode(param);
}

window.base64_decode = (param = "")=>{
    return Base64.decode(param);
}

window.des_encode = (param="",key = "encryption.jsx")=>{
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
        console.log(err);
        message.error(err.message);
        return false;
    }

}

window.des_decode = (param="",key = "encryption.jsx")=>{
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
        console.log(err);
        message.error(err.message);
        return false;
    }

}

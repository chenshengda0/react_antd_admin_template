import {message} from "antd"

const initState = {
    username:"",
    password:"",
    code:"",
}

export const toLogin = (param ={})=>{
    return async()=>{
        try{
            //处理数据
            const req_data = Object.keys(initState).reduce( (prev,item)=>{
                return {...prev,[item]: param[item] ? param[item] : initState[item]}
            },{} )
            const data = await window.request("toLogin",req_data);
            window.setCookie(data);
            return "登陆成功";
        }catch(err){
            message.error( err.message )
            return false;
        }
    }
} 

export const toLogout = (param={})=>{
    return async()=>{
        try{
            window.removeCookie();
            return "退出成功"
        }catch(err){
            message.error( err.message );
            return false;
        }
    }
}
import * as types from "../../types"
import {message} from "antd"

export const init_pops_pops_data = (data={})=>{
    return async(dispatch)=>{
        try{
            const resData = await window.request("getLocalProps");
            dispatch({type:types.INIT_POPS_POPS_DATA,data:resData});
            return "初始化弹出层成功";
        }catch(err){
            message.error(err.message);
            return false;
        }
    }
}


export const set_pops_pops_data = (data)=>{
    return async(dispatch)=>{
        try{
            //设置
            await window.request("setLocalProps",{reqObj:data});
            //重新获取
            const resData = await window.request("getLocalProps");
            dispatch({type:types.INIT_POPS_POPS_DATA,data:resData});
            return "设置弹出层成功";
        }catch(err){
            message.error(err.message);
            return false;
        }
    }
}



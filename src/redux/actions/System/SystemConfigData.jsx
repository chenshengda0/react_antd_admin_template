import * as types from "../../types"
import {message} from "antd"

export const init_system_config_data = (data={})=>{
    return async(dispatch)=>{
        try{
            //更新数据
            const resData = await window.request("getConfig");
            dispatch({type:types.INIT_SYSTEM_CONFIG_DATA,data:resData});
            return "初始化配置成功";
        }catch(err){
            message.error(err.message);
            return false;
        }

    }
}

export const set_system_config_data = (data = {})=>{
    return async(dispatch)=>{
        try{
            //设置
            await window.request( "setConfig",{reqData:data} );
            //更新数据
            const resData = await window.request("getConfig");
            dispatch( {type:types.SET_SYSTEM_CONFIG_DATA,data:resData} )
            return "保存配置成功";
        }catch(err){
            message.error(err.message)
            return false;
        }
    }
}
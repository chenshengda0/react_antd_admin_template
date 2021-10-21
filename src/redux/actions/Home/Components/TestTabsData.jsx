import * as types from "../../../types"
import {message} from "antd"

export const init_test_tabs_data = (data=[])=>{
    return async(dispatch)=>{
        try{
            const remoteData = await window.request("getRemoteConfig");
            dispatch({ type:types.INIT_TEST_TABS_DATA,data: remoteData })
            return "初始化配置成功";
        }catch(err){
            message.error(err.message);
            return false;
        }
    }
}

export const set_test_tabs_data = (data=[])=>{
    return async(dispatch)=>{
        try{
            //1。发送请求修改数据库配置 data
            await window.request("setRemoteConfig",{reqList : data});
            const remoteData = await window.request("getRemoteConfig");
            dispatch({ type:types.INIT_TEST_TABS_DATA,data: remoteData })
            return "设置配置成功";
        }catch(err){
            message.error( err.message )
            return false;
        }
    }
}
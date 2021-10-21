import * as types from "../../../types"
import {message} from "antd"


export const init_home_common_top_route_data = (data=[])=>{
    return async(dispatch)=>{
        try{
            //深拷贝
            const resData = await window.request("getTopRouter");
            console.log( resData )
            dispatch({type:types.INIT_HOME_COMMON_TOP_ROUTE_DATA,data: resData})
            return "初始化历史记录成功";
        }catch(err){
            message.error(err.message)
            return false;
        }
    }
}

export const set_home_common_top_route_data = (data={})=>{
    return async(dispatch)=>{
        try{
            await window.request("setTopRouter",{addObj:data});
            const resData = await window.request("getTopRouter");
            dispatch({type:types.INIT_HOME_COMMON_TOP_ROUTE_DATA,data: resData})
            return "设置历史记录成功";
        }catch(err){
            message.error(err.message)
            return false;
        }
    }
}
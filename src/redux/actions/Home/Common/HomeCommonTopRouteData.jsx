import * as types from "../../../types"
import {message} from "antd"

const initState = [
    {route:"/common/dashboard_home",title:"首页"},
]

export const init_home_common_top_route_data = (data=[])=>{
    return (dispatch)=>{
        try{
            //深拷贝
            const res_data = [...data,...initState].reduce( (prev,item)=>{
                return [...prev,{...item}]
            },[] )
            dispatch({type:types.INIT_HOME_COMMON_TOP_ROUTE_DATA,data:res_data})
            return message.success("初始化历史记录成功");
        }catch(err){
            message.error(err.message)
        }
    }
}

export const set_home_common_top_route_data = (data={})=>{
    return (dispatch)=>{
        try{
            const res_data = data;
            dispatch({type:types.SET_HOME_COMMON_TOP_ROUTE_DATA,data:res_data})
            return message.success("设置历史记录成功");
        }catch(err){
            message.error(err.message)
        }
    }
}
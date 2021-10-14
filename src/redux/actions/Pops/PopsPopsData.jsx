import * as types from "../../types"
import {message} from "antd"

const initStatus = {
    //本地设置
    SettingPopsComponentStatus : false,
    //个人中心
    PersonalPopsComponentStatus : false,
}

export const init_pops_pops_data = (data={})=>{
    return (dispatch)=>{
        try{
            const resData = {...initStatus};
            dispatch({type:types.INIT_POPS_POPS_DATA,data:resData});
            return message.success("初始化弹出层成功");
        }catch(err){
            return message.error(err.message);
        }
    }
}


export const set_pops_pops_data = (data)=>{
    return (dispatch)=>{
        try{
            const resData =  {...initStatus,...data}
            dispatch({type:types.SET_POPS_POPS_DATA,data:resData});
            return message.success("设置弹出层成功");
        }catch(err){
            return message.error(err.message);
        }
    }
}



import { message } from "antd";
import * as types from "../../../types"

export const init_user_struct_data = (param = {})=>{
    return async(dispatch)=>{
        try{
            //复制数据
            const resData = await window.request("getUserList");
            //保存数据
            dispatch( {type:types.INIT_USER_STRUCT_DATA,data: resData} );
            return "初始化数据成功";
        }catch(err){
            message.error(err.message);
            return false;
        }
    }
}

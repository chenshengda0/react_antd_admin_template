import * as types from "../../../types"
import {message} from "antd"
import * as IconsMap from '@ant-design/icons';

export const init_home_dashboard_top_list_data = (param={})=>{
    return async(dispatch)=>{
        try{
            const request_data = {};
            const data = await window.request("getTopListData",request_data);
            const resData = data.reduce( (prev,item)=>{
                const {
                    id,
                    name,
                    icon,
                    num,
                    title,
                    color,
                    className,
                }=item;
                const Component = IconsMap[icon];
                const current = {
                    id,
                    name,
                    num,
                    title,
                    icon:<Component className={className} twoToneColor={color} />,
                }
                return [...prev,current]
            },[] )
            dispatch({type:types.INIT_HOME_DASHBOARD_TOP_LIST_DATA,data:resData})
            return "设置数据成功";
        }catch(err){
            message.error(err.message);
            return false;
        }
    }
}
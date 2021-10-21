import * as types from "../../types"
import {message} from "antd"

export const init_system_menus_data = (data = [])=>{
    return async(dispatch)=>{
        try{
            const resData = await window.request("getMenus");
            //深拷贝
            const menus = [...resData,...data].reduce( (prev,item)=>{
                return [...prev,{...item}]
            } ,[]);
            //补全key
            const new_res_data  = menus.reduce( (prev,item)=>{
                let path = [item];
                const pathFun = (menus,item)=>{
                    const parent = menus.find( row => row.id === item.pid );
                    if(parent){
                        path = [parent,...path]
                        pathFun(menus,parent);
                    }
                    return path; 
                }
                const keys = pathFun(menus,item);
                const new_item = {
                    ...item,
                    //路由路径
                    key:keys.reduce( (pre,row)=>{
                        return `${pre}${row.key}`
                    },""),
                    //id 路径
                    path:keys.reduce( (pre,row)=>{
                        return [...pre,row.id]
                    },[]),
                    //标签路径
                    titles : keys.reduce( (pre,row)=>{
                        return [...pre,row.title]
                    } ,[])
                }
                prev = [...prev,new_item];
                return prev;
            },[] )
            dispatch({type:types.INIT_SYSTEM_MENUS_DATA,data:new_res_data});
            return "初始化菜单成功";
        }catch(err){
            message.error(err.message);
            return false;
        }
    }
}
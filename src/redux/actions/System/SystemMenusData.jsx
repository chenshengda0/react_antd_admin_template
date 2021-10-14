import * as types from "../../types"
import {message} from "antd"
import {
    DesktopOutlined,
    PieChartOutlined,

  } from '@ant-design/icons';

//初始化参数
const initState = [
    {id:1000000000,pid:0,key:"/common",title:"首页",component:"Home_Public_Page",icon:<DesktopOutlined />,is_menu:false,is_route:false},

        {id:1010000000,pid:1000000000,key:"/dashboard_home",title:"首页",component:"Home_Dashboard_Home",icon:<DesktopOutlined />,is_menu:true,is_route:true},

        {id:1020000000,pid:1000000000,key:"/components",title:"组件",component:"Home_Dashboard_Home",icon:<DesktopOutlined />,is_menu:true,is_route:false},
            {id:1020100000,pid:1020000000,key:"/tabs",title:"选项卡",component:"Home_Components_Home",icon:<PieChartOutlined />,is_menu:true,is_route:true},
            {id:1020200000,pid:1020000000,key:"/editor",title:"富文本",component:"Home_Components_Editor_Text",icon:<PieChartOutlined />,is_menu:true,is_route:true},
            {id:1020300000,pid:1020000000,key:"/markdown",title:"MarkDown",component:"Home_Components_Markdown_Text",icon:<PieChartOutlined />,is_menu:true,is_route:true},

        {id:1030000000,pid:1000000000,key:"/user_struct",title:"会员结构",component:"Home_Dashboard_Home",icon:<DesktopOutlined />,is_menu:true,is_route:false},
            {id:1030100000,pid:1030000000,key:"/struct",title:"组织结构",component:"Home_User_Struct_Home",icon:<PieChartOutlined />,is_menu:true,is_route:true},
            {id:1030200000,pid:1030000000,key:"/tree_struct",title:"树状结构",component:"Home_User_Struct_Tree",icon:<PieChartOutlined />,is_menu:true,is_route:true},

        {id:1040000000,pid:1000000000,key:"/users",title:"会员管理",component:"Home_Dashboard_Home",icon:<DesktopOutlined />,is_menu:true,is_route:false},
            {id:1040100000,pid:1040000000,key:"/list",title:"会员列表",component:"Home_User_List_Home",icon:<PieChartOutlined />,is_menu:true,is_route:true},
            {id:1040200000,pid:1040000000,key:"/add",title:"添加会员",component:"Home_User_List_Add",icon:<PieChartOutlined />,is_menu:true,is_route:true},

    {id:2000000000,pid:0,key:"/home_login",title:"登陆",component:"Login_Home",icon:"DesktopOutlined",is_menu:false,is_route:false},
]

export const init_system_menus_data = (data = [])=>{
    return (dispatch)=>{
        try{
            //深拷贝
            const menus = [...initState,...data].reduce( (prev,item)=>{
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
            return message.success("初始化菜单成功");
        }catch(err){
            message.error(err.message);
        }
    }
}
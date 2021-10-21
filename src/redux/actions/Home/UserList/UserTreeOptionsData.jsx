import * as types from "../../../types"
import {message} from "antd"

/*
const initState = [
    {
        title: 'Node1',
        value: '0-0',
        children: [
          {
            title: 'Child Node1',
            value: '0-0-1',
          },
        ],
    },
];
*/ 

export const init_user_tree_options_data = (param = {})=>{
    return async(dispatch)=>{
        try{
            //复制数据
            const resData = await window.request("getUserList");
            const localDataArr = resData.reduce( (prev,item)=>{
                const {
                    id,
                    pid,
                    account,
                } = item;
                return [...prev,{id,pid,title:account,value:id}];
            },[] )
            const localDataObj = localDataArr.reduce( (prev,item)=>{
                return {...prev,[item.id]:item}
            } ,{})
            const localData = localDataArr.reduce( (prev,item)=>{
                const parent = localDataObj[item.pid];
                if(parent){
                    parent.children ? parent.children.push(item) : parent.children = [item];
                }else{
                    prev.push(item);
                }
                return prev;
            },[] )
            //console.log(localData)
            dispatch( {type:types.INIT_USER_TREE_OPTIONS_DATA,data : localData} )
            return "设置会员treeOptions成功";
        }catch(err){
            return message.error(err.message);
        }
    }
}
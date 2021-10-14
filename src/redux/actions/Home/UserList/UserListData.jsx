import * as types from "../../../types"
import {message} from "antd"

//定义本地存储数据格式
const initState = {
    searchData : {
        page:"",
        pageSize:"",
        searchAge:"",
        searchRegion:"",
        searchProvince:"",
        searchCounty:"",
    },
    listCount : 100,
    localList : [

    ],
}


export const set_user_list_data = (param = {})=>{
    return async(dispatch)=>{
        try{
            //初始值，未传递参数生效
            const local_request_data = {
                page:1,
                pageSize:10,
            }
            const request_data = {...local_request_data,...param};
            const resData = await window.request("getUserPageData",request_data);
            const {
                listCount,
                list,
            } = resData;
            //处理数据，添加唯一 key
            const localList = list.reduce( (prev,item)=>{
                const current = {...item,key:item.id};
                return [...prev,current];
            },[] );
            const localData = {
                ...initState,
                searchData:request_data,
                listCount,
                localList,
            }
            dispatch( {type:types.SET_USER_LIST_DATA,data:localData} )
            return "设置数据成功";
        }catch(err){
            message.error(err.message);
            return false;
        }
    }
}

export const add_user_list_data = (addObj={})=>{
    return async()=>{
        try{
            const request_data = {
                ...addObj,
            }
            await window.request("addUserOne",request_data);
            return "添加成功";
        }catch(err){
            message.error(err.message);
            return false;
        }
    }
}

export const edit_user_list_data=(editObj,param={})=>{
    return async(dispatch)=>{
        try{
            //更新数据
            const editRequestData = {
                ...editObj,
            }
            await  window.request("editUserOne",editRequestData);
            /*重新请求当前页数据*/
            //初始值，未传递参数生效
            const local_request_data = {
                page:1,
                pageSize:10,
            }
            const request_data = {...local_request_data,...param};
            const resData = await window.request("getUserPageData",request_data);
            const {
                listCount,
                list,
            } = resData;
            //处理数据，添加唯一 key
            const localList = list.reduce( (prev,item)=>{
                const current = {...item,key:item.id};
                return [...prev,current];
            },[] );
            const localData = {
                ...initState,
                searchData:request_data,
                listCount,
                localList,
            }
            dispatch( {type:types.SET_USER_LIST_DATA,data:localData} )
            return "更新成功";
        }catch(err){
            message.error(err.message)
            return false;
        }
    }
}

export const delete_user_list_data=(deleteId,param={})=>{
    return async(dispatch)=>{
        try{
            /*删除数据*/
            const delRequestData = {
                id : deleteId,
            }
            await  window.request("deleteUserOne",delRequestData);
            /*重新请求当前页数据*/
            //初始值，未传递参数生效
            const local_request_data = {
                page:1,
                pageSize:10,
            }
            const request_data = {...local_request_data,...param};
            const resData = await window.request("getUserPageData",request_data);
            const {
                listCount,
                list,
            } = resData;
            //处理数据，添加唯一 key
            const localList = list.reduce( (prev,item)=>{
                const current = {...item,key:item.id};
                return [...prev,current];
            },[] );
            const localData = {
                ...initState,
                searchData:request_data,
                listCount,
                localList,
            }
            dispatch( {type:types.SET_USER_LIST_DATA,data:localData} )
            return "删除成功";
        }catch(err){
            message.error(err.message);
            return  false;
        }
    }
}
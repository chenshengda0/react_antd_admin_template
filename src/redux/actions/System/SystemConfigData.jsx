import * as types from "../../types"
import * as icons from "../../../static"
import {message} from "antd"

const initState = {
    uploadAction : "https://new21232f297a57a5a743894a0e4a801fc3.wanfuyuan.vip/uploadImg",
    company:"【萬福源】",
    title : "一片冰心",
    copyright : "后台管理系统 ©2021 Created By Ant Design",
    icons,
    termList:{
        reserves : "余额",
        consumption : "积分",
        pay : "支付积分",
    },
    //每页显示条数
    pageSize : "10",
    //选项
    pageOptions : [
        {name:"5条",value:"5"},
        {name:"10条",value:"10"},
        {name:"30条",value:"30"},
        {name:"50条",value:"50"},
        {name:"100条",value:"100"},
        {name:"200条",value:"200"},
        {name:"500条",value:"500"},
    ], 
    payType:{
        aliPay : "支付宝支付",
        weChat : "微信支付",
        bank : "银行卡支付"
    }
}

export const init_system_config_data = (data={})=>{
    return async(dispatch)=>{
        try{
            const resData = {...initState};
            dispatch({type:types.INIT_SYSTEM_CONFIG_DATA,data:resData});
            return message.success("初始化配置成功");
        }catch(err){
            return message.error(err.message);
        }

    }
}

export const set_system_config_data = (data = {})=>{
    return async(dispatch)=>{
        try{
            const resData = {...data}
            dispatch( {type:types.SET_SYSTEM_CONFIG_DATA,data:resData} )
            return message.success("保存配置成功");
        }catch(err){
            return message.error(err.message)
        }
    }
}
import * as icons from "../static/index"
const resData = {
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
    //选项
    pageOptions : {
        5   :{name:"5条",value:"5",isSelect:false},
        10  :{name:"10条",value:"10",isSelect:true},
        30  :{name:"30条",value:"30",isSelect:false},
        50  :{name:"50条",value:"50",isSelect:false},
        100 :{name:"100条",value:"100",isSelect:false},
        200 :{name:"200条",value:"200",isSelect:false},
        500 :{name:"500条",value:"500",isSelect:false},
    }, 
    payType:{
        aliPay : "支付宝支付",
        weChat : "微信支付",
        bank : "银行卡支付"
    }
}

export const getConfig = (...param)=>{
    const data = resData;
    return {
        code : 200,
        msg  : "SUCCESS",
        data : {...data}
    }
}

export const setConfigData = (...param)=>{
    const data = resData;
    const {
        reqData = {
            termList : {
                reserves : "余额",
                consumption : "积分",
                pay : "支付积分",
            }
        },
    } = JSON.parse(param[1].body);
    //查找遍历对象
    Object.keys(reqData).map( (item)=>{
        data[item] = reqData[item];
        return true;
    } )
    return {
        code : 200,
        msg : "SUCCESS",
        data : {...data},
    }
}
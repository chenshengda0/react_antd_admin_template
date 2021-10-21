const resData = [
    {id:100,pid:0,group:"SYSTEM",field:"",title:"系统配置",description:"",value:"",type:"text"},
        {id:101,pid:100,group:"SYSTEM",field:"title",title:"标题",description:"系统标题",value:"万福源",type:"text"},
        {id:102,pid:100,group:"SYSTEM",field:"descript",title:"说明",description:"系统简介",value:"万福源是balabalabala",type:"textarea"},
        {id:103,pid:100,group:"SYSTEM",field:"number",title:"版本号",description:"版本号",value:"1.231",type:"number"},
        {id:104,pid:100,group:"SYSTEM",field:"number",title:"版本号",description:"版本号",value:"0",type:"switch"},

    {id:200,pid:0,group:"CASH",field:"",title:"提现配置",description:"",value:"",type:"text"},
        {id:201,pid:200,group:"CASH",field:"csah_open_status",title:"提现开关",description:"提现开关",value:"1",type:"switch"},

    {id:300,pid:0,group:"SCAN",field:"",title:"扫码配置",description:"",value:"",type:"text"},
        {id:301,pid:300,group:"SCAN",field:"scan_open_status",title:"扫码开关",description:"开启状态",value:"1",type:"switch"},

    {id:400,pid:0,group:"REGISTER",field:"",title:"注册配置",description:"",value:"",type:"text"},
        {id:401,pid:400,group:"REGISTER",field:"register_open_status",title:"注册开关",description:"是否开启注册",value:"1",type:"switch"},

    {id:500,pid:0,group:"APP",field:"",title:"APP配置",description:"",value:"",type:"text"},
        {id:501,pid:500,group:"APP",field:"app_open_status",title:"APP开关",description:"是否开启app",value:"1",type:"switch"},

    {id:600,pid:0,group:"BUSINESSAPP",field:"",title:"商家APP配置",description:"",value:"",type:"text"},
        {id:601,pid:600,group:"BUSINESSAPP",field:"business_open_status",title:"商家APP开关",description:"是否开启上级app",value:"1",type:"switch"},

    {id:700,pid:0,group:"OTC",field:"",title:"OTC配置",description:"",value:"",type:"text"},
        {id:701,pid:700,group:"OTC",field:"otc_open_status",title:"OTC开关",description:"是否开启OTC",value:"1",type:"switch"},

    {id:800,pid:0,group:"MINE",field:"",title:"矿机配置",description:"",value:"",type:"text"},
        {id:801,pid:800,group:"MINE",field:"mine_open_status",title:"矿机开关",description:"是否开启矿机",value:"1",type:"switch"},

    {id:900,pid:0,group:"MANAGE",field:"",title:"理财配置",description:"",value:"",type:"text"},
        {id:901,pid:900,group:"MANAGE",field:"manage_open_status",title:"理财配置",description:"理财开关",value:"1",type:"switch"},
]

export const getRemoteConfig = (...param)=>{
    return {
        code : 200,
        message : "SUCCESS",
        data : resData,
    }
}

export const setRemoteConfig = (...param)=>{
    const {
        reqList = [

        ]
    } = JSON.parse(param[1].body);
    reqList.map( item => {
        const localIndex = resData.findIndex( row => parseInt(row.id) === parseInt(item.id) );
        resData.splice(localIndex,1,item);
        return true;
    } );
    console.log(resData);
    return {
        code : 200,
        message: " SUCCESS",
        data : [],
    }
}
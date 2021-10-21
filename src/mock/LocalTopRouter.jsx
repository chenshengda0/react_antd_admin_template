const resData = [
    {route:"/common/dashboard_home",title:"首页"},
]

export const getTopRouter = (...param)=>{
    return {
        code : 200,
        message : "SUCCESS",
        data : [...resData]
    }
} 

export const addTopRouter = (...param)=>{
    const {
        addObj = {
                    route:"/common/dashboard_home",
                    title:"首页"
                },
    } = JSON.parse(param[1].body);
    const localIndex = resData.findIndex( item => item.route === addObj.route);
    if( localIndex >= 0 ){
        resData.splice(localIndex,1);
    }
    resData.splice(0,0,addObj);
    return {
        code : 200,
        message : "SUCCESS",
        data : [],
    }
}
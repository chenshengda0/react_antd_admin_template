const resData = {
    //本地设置
    SettingPopsComponentStatus : false,
    //个人中心
    PersonalPopsComponentStatus : false,
}

export const GetLocalProps = (...param)=>{
    return {
        code : 200,
        message : "SUCCESS",
        data : {...resData},
    }
}

export const SetLocalProps = (...param)=>{
    try{
        const {
            reqObj = {
                SettingPopsComponentStatus : true,
            }
        } = JSON.parse(param[1].body)
        Object.keys(resData).map( item=>{
            resData[item] = reqObj[item] ? reqObj[item] : false;
            return true;     
        } )
        return {
            code : 200,
            message : "SUCCESS",
            data : [],
        }
    }catch(err){
        return {
            code : 400,
            message : err.message,
            data : {},
        }
    }
}
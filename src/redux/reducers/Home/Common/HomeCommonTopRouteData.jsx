import * as types from "../../../types"
const initState = [
    
]

export const HomeCommonTopRouteData = (preState = initState,action)=>{
    const {type,data} = action;
    let old_data = [];
    switch (type) {
        case types.INIT_HOME_COMMON_TOP_ROUTE_DATA:
            return [...data]

        case types.SET_HOME_COMMON_TOP_ROUTE_DATA:
            //检查对象是否已存在
            old_data = preState.reduce( (prev,item)=>{
                return item.route === data.route ? prev : [...prev,item];
            } ,[])
            return [data,...old_data];
    
        default:
            return preState;
    }
}
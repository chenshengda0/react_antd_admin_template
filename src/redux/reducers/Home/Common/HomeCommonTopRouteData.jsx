import * as types from "../../../types"
const initState = [
    
]

export const HomeCommonTopRouteData = (preState = initState,action)=>{
    const {type,data} = action;
    
    switch (type) {
        case types.INIT_HOME_COMMON_TOP_ROUTE_DATA:
            return [...data]
    
        default:
            return preState;
    }
}
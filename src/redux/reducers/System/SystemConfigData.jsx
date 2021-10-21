import * as types from "../../types"
const initState = {

}
export const SystemConfigData = (preState=initState,action)=>{
    const {type,data} = action;
    switch (type) {

        case types.INIT_SYSTEM_CONFIG_DATA:
            return {...data}

        case types.SET_SYSTEM_CONFIG_DATA:
            return {...preState,...data}
    
        default:
            return preState;
    }
}
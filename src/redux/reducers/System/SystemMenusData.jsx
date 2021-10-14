import * as types from "../../types"
const initState = [];

export const SystemMenusData = (preState = initState,action)=>{
    const {type,data} = action;
    switch (type) {
        case types.INIT_SYSTEM_MENUS_DATA:
            return [...data];
    
        default:
            return preState;
    }
}
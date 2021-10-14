import * as types from "../../../types"
const initState = [

]

export const HomeDashboardTopListData = (preState = initState,action)=>{
    const {type,data} = action;
    switch (type) {
        case types.INIT_HOME_DASHBOARD_TOP_LIST_DATA:
            return [...data];
    
        default:
            return preState;
    }
}
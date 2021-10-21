import * as types from "../../../types"
const initState = []

export const HomeDashboardBarData = (preState = initState,action)=>{
    const {type,data} = action;
    switch (type) {
        case types.INIT_HOME_DASHBOARD_BAR_DATA:
            return [...data];
    
        default:
            return preState;
    }
}
import * as types from "../../../types"
const initState = []

export const HomeDashboardLineData = (preState = initState,action)=>{
    const {type,data} = action;
    switch (type) {
        case types.INIT_HOME__DASHBOARD_LINE_DATA:
            return [...data];
    
        default:
            return preState;
    }
}
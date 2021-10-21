import * as types from "../../../types"

const initState = []

export const TestTabsData = (preState = initState,action)=>{
    const {type,data} = action;
    switch (type) {
        case types.INIT_TEST_TABS_DATA:
            return [...data];
    
        default:
            return preState;
    }
}
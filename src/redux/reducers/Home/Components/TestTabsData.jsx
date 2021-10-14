import * as types from "../../../types"

const initState = []

export const TestTabsData = (preState = initState,action)=>{
    const {type,data} = action;
    switch (type) {
        case types.INIT_TEST_TABS_DATA:
            return [...data];

        case types.SET_TEST_TABS_DATA:
            return preState.reduce( (prev,item)=>{
                return (data.find(row => parseInt(row.id)=== item.id) || false) ? [...prev,{...data.find(row => parseInt(row.id)=== item.id)}] : [...prev,{...item}];
            },[] );
    
        default:
            return preState;
    }
}
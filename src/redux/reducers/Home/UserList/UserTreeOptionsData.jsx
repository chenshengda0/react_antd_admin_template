import * as types from "../../../types"

const initState = [];

export const UserTreeOptionsData = (preState = initState,action)=>{
    const {type,data} = action;
    switch (type) {
        case types.INIT_USER_TREE_OPTIONS_DATA:
            return [...data];
    
        default:
            return preState;
    }
}
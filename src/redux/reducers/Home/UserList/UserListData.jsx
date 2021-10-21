import * as types from "../../../types"

const initState = {

}

export const UserListData = (preState = initState,action)=>{
    const {type,data} = action;
    switch (type) {
        case types.SET_USER_LIST_DATA:
            return {...data};
    
        default:
            return preState;
    }
}
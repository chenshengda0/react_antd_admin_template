import * as types from "../../../types"
const initState = [];


export const UserStructData = (preState = initState,action) => {
    const {type,data} = action;
    switch (type) {
        case types.INIT_USER_STRUCT_DATA:
            return [...data];

        case types.SET_USER_STRUCT_DATA:
            return [...preState.reduce( (prev,item)=>{
                return parseInt(item.id) === parseInt(data.id) ? [...prev,data] : [...prev,item]
            },[] )]

        default:
            return preState;
    }
}
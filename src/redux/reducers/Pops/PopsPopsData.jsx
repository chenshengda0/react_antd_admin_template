import * as types from "../../types"
const initState = {
    
}

export const PopsPopsData = (preState=initState,action)=>{
    const {type,data} = action;
    switch(type){
        case types.INIT_POPS_POPS_DATA:
            return {...data};

        default :
            return preState;
    }
}
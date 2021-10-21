import * as types from "../../../types"
import {message} from "antd"
const initState = [
    {
      "year": "1991",
      "value": 3,
      "type": "Lon"
    },
    {
      "year": "1992",
      "value": 4,
      "type": "Lon"
    },
    {
      "year": "1993",
      "value": 3.5,
      "type": "Lon"
    },
    {
      "year": "1994",
      "value": 5,
      "type": "Lon"
    },
    {
      "year": "1995",
      "value": 4.9,
      "type": "Lon"
    },
    {
      "year": "1996",
      "value": 6,
      "type": "Lon"
    },
    {
      "year": "1997",
      "value": 7,
      "type": "Lon"
    },
    {
      "year": "1998",
      "value": 9,
      "type": "Lon"
    },
    {
      "year": "1999",
      "value": 13,
      "type": "Lon"
    },
    {
      "year": "1991",
      "value": 3,
      "type": "Bor"
    },
    {
      "year": "1992",
      "value": 4,
      "type": "Bor"
    },
    {
      "year": "1993",
      "value": 3.5,
      "type": "Bor"
    },
    {
      "year": "1994",
      "value": 5,
      "type": "Bor"
    },
    {
      "year": "1995",
      "value": 4.9,
      "type": "Bor"
    },
    {
      "year": "1996",
      "value": 6,
      "type": "Bor"
    },
    {
      "year": "1997",
      "value": 7,
      "type": "Bor"
    },
    {
      "year": "1998",
      "value": 9,
      "type": "Bor"
    },
    {
      "year": "1999",
      "value": 13,
      "type": "Bor"
    }
];

export const init_home_dashboard_bar_data = (data=[])=>{
    return (dispatch)=>{
        try{
            //深拷贝
            const resData = [...initState,...data].reduce( (prev,item)=>{
              return [...prev,{...item}]
          },[])
            dispatch({type:types.INIT_HOME_DASHBOARD_BAR_DATA,data:resData})
            return message.success("初始化柱状图成功");
        }catch(err){
            return message.error(err.message)
        }
    }
}
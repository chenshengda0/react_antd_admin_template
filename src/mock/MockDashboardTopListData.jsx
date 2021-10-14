import Mock from "mockjs"
import {
    checkAuth,
} from "./common"
const list = new Array(8).fill({}).map( (...param) =>{
    return Mock.mock({
        id : param[1]+1,
        'name' : [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
        ][param[1]],
        num : "@integer(600, 1000000000)",
        title : "@cname",
        "icon|1" : [
                        "SmileTwoTone",
                        "FrownTwoTone",
                        "TrademarkCircleTwoTone",
                        "RedEnvelopeTwoTone",
                        "PropertySafetyTwoTone",
                        "SafetyCertificateTwoTone",
                        "ShopTwoTone",
                        "ShoppingTwoTone"
                    ],
        "color|1" : ["#52c41a","#eb2f96"],
        className : "icon",
    })
});

export const getTopList = (...param)=>{
    const resData = list;
    const isCheckAuth = checkAuth(param[1].headers);
    if( !isCheckAuth ){
        return {
            code: 300,
            message : "fail",
            data : [],
        }
    }
    return {
        code: 200,
        message : "success",
        data : [...resData],
    }
}
import {combineReducers} from "redux";

//首页
import {
    HomeDashboardTopListData,
    HomeDashboardLineData,
    HomeCommonTopRouteData,
    HomeDashboardAreaData,
    HomeDashboardBarData,

    TestTabsData,

    UserStructData,

    UserListData,
    UserTreeOptionsData,
} from "./Home"

//弹出层
import {
    PopsPopsData,
} from "./Pops"

//system
import {
    SystemConfigData,
    SystemMenusData,
} from "./System"

export default combineReducers({
    //配置
    SystemConfigData,

    //菜单数组
    SystemMenusData,

    //路由列表
    HomeCommonTopRouteData,

    //会员Line数据
    HomeDashboardTopListData,
    HomeDashboardLineData,
    HomeDashboardAreaData,
    HomeDashboardBarData,

    //弹出层参数
    PopsPopsData,

    //tabs
    TestTabsData,

    //users
    UserStructData,

    //userlist
    UserListData,
    UserTreeOptionsData,
});
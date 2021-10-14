import {
    InitSystemConfigDataAction,
    SetSystemConfigDataAction,
    
    InitSystemMenusDataAction,
} from "./System"

import {
    toLoginAction,
    toLogoutAction,
} from "./Login"

import {
    InitHomeDashboardTopListDataAction,
    InitHomeDashboardLineDataAction,
    InitHomeDashboardAreaDataAction,
    InitHomeDashboardBarDataAction,

    InitHomeCommonTopRouteDataAction,
    SetHomeCommonTopRouteDataAction,

    InitTestTabsDataAction,
    SetTestTabsDataAction,

    InitUserStructDataAction,

    SetUserListDataAction,
    DeleteUserListDataAction,
    EditUserListDataAction,
    AddUserListDataAction,

    InitUserTreeOptionsDataAction,
} from "./Home"

import {
    InitPopsPopsDataAction,
    SetPopsPopsDataAction,
} from "./Pops"

export {
    //登陆、退出
    toLoginAction,
    toLogoutAction,
    //配置
    InitSystemConfigDataAction,
    SetSystemConfigDataAction,
    
    //弹出层
    InitPopsPopsDataAction,
    SetPopsPopsDataAction,

    //菜单/路由
    InitSystemMenusDataAction,

    //设置路由
    InitHomeCommonTopRouteDataAction,
    SetHomeCommonTopRouteDataAction,

    //设置图表用户数据
    InitHomeDashboardTopListDataAction,
    InitHomeDashboardLineDataAction,
    InitHomeDashboardAreaDataAction,
    InitHomeDashboardBarDataAction,

    //tab组件
    InitTestTabsDataAction,
    SetTestTabsDataAction,

    //会员
    InitUserStructDataAction,

    //会员分页
    SetUserListDataAction,
    DeleteUserListDataAction,
    EditUserListDataAction,
    AddUserListDataAction,
    //推荐人Tree
    InitUserTreeOptionsDataAction,
}
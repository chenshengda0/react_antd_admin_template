import {
    WithComponentCommon,
} from "./WithComponentCommon"

import {
    WithAutoLogin,
} from "./WithAutoLogin"
import {
    WithAutoLogout,
} from "./WithAutoLogout"

import {
    WithContentTemp,
} from "./WithContentTemp";

import {
    WithUserListPage,
} from "./WithUserListPage"

import {
    WithUserStructPage,
} from "./WithUserStructPage"

export {
    //组件包装器
    WithComponentCommon as WithComponentCommonContainer,

    //自动登陆包装器
    WithAutoLogin as WithAutoLoginContainer,
    //自动退出包装器
    WithAutoLogout as WithAutoLogoutContainer,

    //页面包装器
    WithContentTemp as WithContentTempContainer,

    //UserList包装器
    WithUserListPage as WithUserListPageContainer,

    //UserStruct包装器
    WithUserStructPage as WithUserStructPageContainer,

}
import fetchMock from "fetch-mock"
import * as LocalConfigApi from "./LocalConfig"
import * as LocalMenusApi from "./LocalMenus"
import  * as MockUserDataApi from "./MockUserData"
import * as MockDashboardTopListDataApi from "./MockDashboardTopListData"
import * as MockAdminDataApi from "./MockAdminData"
import * as MockConfigApi from "./MockConfig"
import * as LocalTopRouterApi from "./LocalTopRouter"
import * as LocalPropsApi from "./LocalProps"

const options = {"method": "POST"};
//本地配置
fetchMock.mock("/mock/local/config",LocalConfigApi.getConfig,options);
fetchMock.mock("/mock/local/setConfig",LocalConfigApi.setConfigData,options);
//本地菜单
fetchMock.mock("/mock/local/menus",LocalMenusApi.getMenus,options);

//本地弹出框状态管理
fetchMock.mock("/mock/local/getProps",LocalPropsApi.GetLocalProps,options);
fetchMock.mock("/mock/local/setProps",LocalPropsApi.SetLocalProps,options);

//模拟服务器配置
fetchMock.mock("/mock/router/getTopRoute",LocalTopRouterApi.getTopRouter,options);
fetchMock.mock("/mock/router/addTopRoute",LocalTopRouterApi.addTopRouter,options);

//模拟服务端配置
fetchMock.mock("/mock/remote/config",MockConfigApi.getRemoteConfig,options);
fetchMock.mock("/mock/remote/setConfig",MockConfigApi.setRemoteConfig,options);



//登陆
fetchMock.mock("/mock/admin/toLogin",MockAdminDataApi.toLogin,options);

//获取全部数据
fetchMock.mock("/mock/user/getUserList",MockUserDataApi.getList,options);
//获取单条数据
fetchMock.mock("/mock/user/getUser",MockUserDataApi.getOne,options);
//获取分页数据
fetchMock.mock("/mock/user/getPageData",MockUserDataApi.getPageData,options);
//删除
fetchMock.mock("/mock/user/deleteOne",MockUserDataApi.deleteOne,options);
//更新
fetchMock.mock("/mock/user/editData",MockUserDataApi.editData,options);
//添加
fetchMock.mock("/mock/user/addData",MockUserDataApi.addUser,options);


//首页列表
fetchMock.mock("/mock/top/listData",MockDashboardTopListDataApi.getTopList,options);
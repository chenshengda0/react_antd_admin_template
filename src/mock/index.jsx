import fetchMock from "fetch-mock"
import  * as MockUserDataApi from "./MockUserData"
import * as MockDashboardTopListDataApi from "./MockDashboardTopListData"
import * as MockAdminDataApi from "./MockAdminData"

const options = {"method": "POST"};

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
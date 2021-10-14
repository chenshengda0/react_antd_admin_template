import {Component} from "react"
import {connect} from "react-redux"
import {
  InitSystemConfigDataAction,
  InitSystemMenusDataAction,
  InitHomeCommonTopRouteDataAction,
  InitPopsPopsDataAction,

  toLoginAction,
} from "./redux/actions"
//import "./App.scss"
import {
  Switch,
  Redirect,
} from "react-router-dom"
import 'antd/dist/antd.css';
import * as pages from "./pages"
import {
  RoutePrivateAutoLoginComponent,
  RoutePrivateAutoLogoutComponent,
} from "./components/RoutePrivate"

class App extends Component{

  async componentDidMount(){
    //初始化菜单
    this.props.InitSystemMenusDataAction();

    //初始化弹出层
    this.props.InitPopsPopsDataAction();

    //初始化配置
    this.props.InitSystemConfigDataAction();

    //初始化顶部路由
    this.props.InitHomeCommonTopRouteDataAction();
  }

  render(){
    const {SystemMenusData,SystemConfigData,PopsPopsData,HomeCommonTopRouteData} = this.props;
    const current_menus = SystemMenusData.reduce( (pre,item)=>{
      return item.pid === 0 ? [...pre,item] : [...pre];
    } ,[]);
    const loading = SystemMenusData.length > 0 && Object.keys(SystemConfigData).length > 0 && Object.keys(PopsPopsData).length > 0 && HomeCommonTopRouteData.length > 0 ? true : false;
    return (
      <>
        {
          loading 
          ?
          (
            <Switch>
              {
                current_menus.map( (item)=>{
                  //验证cookie 自动登陆
                  //验证cookie 自动退出
                  return  item.key === "/common" 
                          ?
                            (
                              <RoutePrivateAutoLogoutComponent path={item.key} redirectPath = "/home_login" key={item.id} component={pages[item.component]} />
                            )
                          :
                            (
                              <RoutePrivateAutoLoginComponent path={item.key} redirectPath = "/common" key={item.id} component={pages[item.component]} />
                            )
                  }
                )
              }
              <Redirect to={current_menus[0].key} />
            </Switch>
          )
          :
          (<></>)
        }

      </>
    );
  }
}

export default connect(
  store=>({
    SystemConfigData : store.SystemConfigData,
    SystemMenusData : store.SystemMenusData,
    PopsPopsData : store.PopsPopsData,
    HomeCommonTopRouteData : store.HomeCommonTopRouteData,
  }),{
    InitSystemConfigDataAction,
    InitSystemMenusDataAction,
    InitHomeCommonTopRouteDataAction,
    InitPopsPopsDataAction,

    toLoginAction,
  }
)(App);

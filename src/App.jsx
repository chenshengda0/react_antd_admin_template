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

  state = {
    loading : false,
  }

  async componentDidMount(){
    this.setState({loading:true});
    //初始化菜单
    const resMenus = await this.props.InitSystemMenusDataAction();

    //初始化弹出层
    const resPops = await this.props.InitPopsPopsDataAction();

    //初始化配置
    const resConfig = await this.props.InitSystemConfigDataAction();

    //初始化顶部路由
    const resTopList = await this.props.InitHomeCommonTopRouteDataAction();

    if( resMenus && resPops && resConfig && resTopList ){
      this.setState({loading:false});
    }
  }

  componentWillUnmount(){
    this.setState = ()=>false;
  }

  render(){
    const {SystemMenusData} = this.props;
    const current_menus = SystemMenusData.reduce( (pre,item)=>{
        return item.pid === 0 ? [...pre,item] : [...pre];
    } ,[]);
    const {loading:reqLoading} = this.state;
    const loading = reqLoading || current_menus.length === 0;
    return (
      <>
        {
          !loading 
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

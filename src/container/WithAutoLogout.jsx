import {Component} from "react"
import {withRouter} from "react-router-dom"
/*
* 高阶组件，设置定时器，检查是否还是登陆状态
*/
export const WithAutoLogout = (CustomComponent) => {
    class WarpperComponent extends Component{

        componentDidMount(){
            this.iTimer();
        }


        iTimer = () => {
            this.timer = setInterval(() => {
                //判断cookie 为空或undefined 时退出登陆，跳转到SignIndex页面
                //判断cookie 不为undefined 且 有值时自动跳转到首页
                const token = window.getCookie();
                if( !token ){
                    this.props.history.push({
                        pathname : "/home_login",
                    });
                }
            },1000)
        };

        componentWillUnmount() {
            this.timer && clearInterval(this.timer);
        }

        render(){
            const props = {
                ...this.props,
            }

            return (
                <>
                    <CustomComponent {...props}></CustomComponent>     
                </>
            );
        }

    }

    return withRouter(WarpperComponent);
}
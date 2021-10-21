import {Component} from "react"
import {connect} from "react-redux"
import "./WithContentTemp.scss"
import { Scrollbars } from "react-custom-scrollbars";
import { Layout} from 'antd';
import {
    CommonHtmlHeaderComponent,
} from "../components/Common"
/*
* 高阶组件，初始化mui
*/
const {Content} = Layout;
export const WithContentTemp = (CustomComponent) => {
    class WarpperComponent extends Component{

        getSonInstance = (SonClass)=>{
            this.sonInstance = SonClass;
        }

        render(){
            const props = {
                ...this.props,
            }
            return (
                <>
                    <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}  style={{
                        width:"calc(100% - 32px)",
                        height:"calc(100% - 110px)",
                        marginTop:"10px",
                        marginLeft:"16px",
                        padding:"24px",
                        backgroundColor:"#FFF",
                        boxShadow:"0px 3px 6px 0px #ccc",
                        borderRadius:"6px",
                    }}>
                        <Content style={{
                            padding:"16px",
                        }}>
                            <CommonHtmlHeaderComponent></CommonHtmlHeaderComponent>
                            <CustomComponent ref={this.getSonInstance.bind(this)} {...props}></CustomComponent>
                        </Content>
                    </Scrollbars>
                   
                </>
            );
        }

    }

    return connect(
        store => ({
            SystemConfigData : store.SystemConfigData,
        }),
        {

        }
    )( WarpperComponent );
}
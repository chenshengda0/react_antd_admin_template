import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    Modal,
    message,
} from "antd"
import * as iconMap from '@ant-design/icons';
const {confirm} = Modal;
export const WithComponentCommon = (CustomComponent)=>{
    class WarpperComponent extends Component{

        render(){
            return (
                <>
                    <CustomComponent {...Object.assign(
                        {},
                        {
                            ...this.props,
                            iconMap,
                        },
                        {
                            toConfirm:(Obj)=>{
                                const {
                                    title = "删除？",
                                    icon = "ExclamationCircleOutlined",
                                    content = "确定删除当前行？",
                                    onOk = ()=>{
                                        console.log(111)
                                    },
                                } = Obj;
                                const CurIcon = iconMap[icon];
                                confirm({
                                    title: title,
                                    icon: <CurIcon />,
                                    content: content,
                                    onOk,
                                    onCancel:()=>{
                                      message.success("您点击了取消");
                                    },
                                });
                            }
                        }
                    )}></CustomComponent>
                </>
            );
        }

    }
    return connect(
        store => ({
            SystemConfigData : store.SystemConfigData,
        }),{

        }
    )( withRouter(WarpperComponent) )
} 
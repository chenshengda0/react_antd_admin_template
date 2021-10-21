import {Component} from "react"
import {connect} from "react-redux"
import {
    message,
    Spin,
} from "antd"
import {
    InitUserTreeOptionsDataAction,
} from "../redux/actions"

export const WithUserListPage = (CustomComponent)=>{
    class WarpperComponent extends Component{

        state = {
            loading : false,
        }

        async componentDidMount(){
            //初始化tree options
            this.setState({loading:true});
            const res = await this.props.InitUserTreeOptionsDataAction();
            res && message.success(res) && this.setState({loading:false});
        }

        render(){
            const {
                loading,
            } = this.state;
            return (
                <>
                    {
                        loading ?
                        (
                            <div style={{
                                margin:"20px 0",
                                marginBottom:"20px",
                                padding:"30px 50px",
                                textAlign:"center",
                                background:"rgba(0, 0, 0, 0.05)",
                                borderRadius:"6px",
                            }}>
                                <Spin size="large" />
                            </div>
                        )
                        :
                        (
                            <CustomComponent {...Object.assign(
                                {},
                                {
                                    ...this.props,
                                },
                                {}
                            )}></CustomComponent>
                        ) 
                    }
                </>
            )
        }

    }

    return connect(
        store => ({
            SystemConfigData : store.SystemConfigData,
        }),{
            InitUserTreeOptionsDataAction,
        } ,null, { forwardRef: true }
    )(WarpperComponent);
}
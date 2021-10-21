import {Component} from "react"
import {connect} from "react-redux"
import {
    message,
    Spin,
} from "antd"
import {
    InitUserStructDataAction,
} from "../redux/actions"

export const WithUserStructPage = (CustomComponent)=>{
    class WarpperComponent extends Component{

        state = {
            loading : false,
        }

        async componentDidMount(){
            //初始化tree options
            this.setState({loading:true});
            const res = await this.props.InitUserStructDataAction();
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
            InitUserStructDataAction,
        } ,null, { forwardRef: true }
    )(WarpperComponent);
}
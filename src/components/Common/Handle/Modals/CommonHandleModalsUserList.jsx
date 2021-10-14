import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    Row,
    Col,
    Modal,
    Button,
} from "antd"
import "./CommonHandleModalsUserList.scss"
import CommonTextArea from "../../TextArea"


class CommonHandleModalsUserList extends Component{
    
    render(){
        const {
            title = "编辑会员",
            CommonHandleModalsUserListStatus = false,
            editData = {
                account : {
                    name:"account",
                    title:"账号",
                    value:"",
                    placeholder:"请输入要搜索的账号",
                },
            },
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            },
            reset_form_data = ()=>{
                this.props.reset_form_data();
            },
            save_form_data = ()=>{
                this.props.save_form_data();
            }
        } = this.props;
        const mapData = Object.values(editData);
        return (
            <>
                <Modal title={title} visible={CommonHandleModalsUserListStatus} onOk={
                    ()=>{
                        save_form_data()
                    }
                } onCancel={
                    ()=>{
                        //重置
                        reset_form_data();
                        //关闭弹出框
                        const Obj = {
                            CommonHandleModalsUserListStatus:false,
                        }
                        set_form_data(Obj);
                    }
                }

                footer={[
                    <Button key="back" shape={"round"} onClick={
                        ()=>{
                            //重置
                            reset_form_data();
                            //关闭弹出框
                            const Obj = {
                                CommonHandleModalsUserListStatus:false,
                            }
                            set_form_data(Obj);
                        }
                    }>
                        取消
                    </Button>,
                    <Button key="reset" shape={"round"} type="dashed" onClick={
                        ()=>{
                            reset_form_data()
                        }
                    }>
                        重置
                    </Button>,
                    <Button key="submit" shape={"round"} type="primary" onClick={
                        ()=>{
                            save_form_data()
                        }
                    }>
                        提交
                    </Button>,
                ]}

                className="CommonHandleModalsUserListComponent">
                    <Row>
                        {
                            mapData.map( item => {
                                return (
                                    <Col span={24} key={item.name}>
                                        <CommonTextArea {...Object.assign(
                                            {},
                                            {
                                                ...item,
                                            },
                                            {
                                                set_form_data : (Obj)=>{
                                                    const current = {...editData,...Obj}
                                                    set_form_data({editData:current});
                                                }
                                            }
                                        )}></CommonTextArea>
                                    </Col>
                                )
                            } )
                        }

                    </Row>
                </Modal>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        UserListData : store.UserListData,
    }),{

    }
)( withRouter( CommonHandleModalsUserList ) )
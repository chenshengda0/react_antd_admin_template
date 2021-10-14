import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonCollapse.scss"
import {
    Collapse,
} from "antd"
import {
    CommonCollapseItemsExcelComponent,
    CommonCollapseItemsSearchComponent,
    CommonCollapseItemsTransferComponent, 
} from "./CollapseItems"

const { Panel } = Collapse;
class CommonCollapse extends Component{

    render(){
        //搜索
        const {
            searchData = {
                account:{
                    name : "account",
                    value : "",
                    title : "账号",
                    placeholder : "请输入要搜索的账号",
                },
                age:{
                    name : "age",
                    value : "",
                    title : "年龄",
                    placeholder : "请输入要搜索的年龄",
                }
            },
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            },
            toHandle = ()=>{
                this.props.toHandle();
            }
        } = this.props;

        //导出
        const {
            dataSource = [
                {id:1,title:"123"},
                {id:2,title:"1234"},
                {id:3,title:"12345"},
                {id:4,title:"123456"},
                {id:5,title:"1234567"},
                {id:6,title:"12345678"},
            ],
            popColumnsObj = {},
            selectedRowKeys = [],
            toSelectedRowKeys = (param)=>{
                this.props.toSelectedRowKeys(param);
            }
        } = this.props;

        //设置
        const {
            mockData,
            targetKeys,
            selectedKeys,
            transferChange = (Obj)=>{
                this.props.transferChange(Obj)
            }
        } = this.props;
        return (
            <>
                <Collapse accordion>
                    <Panel header="查询" key="1">
                        <CommonCollapseItemsSearchComponent {...Object.assign(
                            {},
                            {
                                searchData,
                            },
                            {
                                set_form_data,
                                toHandle,
                            }
                        )}></CommonCollapseItemsSearchComponent>
                    </Panel>

                    <Panel header="导出" key="2">
                        <CommonCollapseItemsExcelComponent {...Object.assign(
                            {},
                            {
                                dataSource,
                                popColumnsObj,
                                selectedRowKeys,
                            },
                            {
                                toSelectedRowKeys,
                            }
                        )}></CommonCollapseItemsExcelComponent>
                    </Panel>

                    <Panel header="设置" key="3">
                        <CommonCollapseItemsTransferComponent {...Object.assign(
                            {},
                            {
                                mockData,
                                targetKeys,
                                selectedKeys, 
                            },
                            {
                                transferChange,
                            }
                        )}></CommonCollapseItemsTransferComponent>
                    </Panel>

                </Collapse>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter( CommonCollapse ) )
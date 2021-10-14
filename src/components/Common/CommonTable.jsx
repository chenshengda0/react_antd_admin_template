import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonTable.scss"
import {
    CommonHandleUserListComponent,
} from "./Handle"
import {
    Table,
} from "antd"

class CommonTable extends Component{

    

    render(){
        const {
            total=10,
            dataSource,
            popColumnsObj,
            selectedRowKeys,
            toSelectedRowKeys = (selectedRowKeys)=>{
                this.props.toSelectedRowKeys(selectedRowKeys);
            }
        } = this.props;
        const localColumnsObj = {
            id : {
                title: 'ID',
                dataIndex: 'key',
                width:20,
                sorter: (a, b) => parseInt(a.key) - parseInt(b.key),
            },
            ...popColumnsObj,
            handle : {
                title: '操作',
                fixed : "right",
                width:"30px",
                dataIndex: 'key',
                render: (...param)=>{
                    const {UserTreeOptionsData} = this.props;
                    const loading = UserTreeOptionsData.length > 0 ? true : false;
                    return (
                        <>
                            {
                                loading 
                                ?
                                (
                                    <CommonHandleUserListComponent {...Object.assign(
                                        {},
                                        {
                                            record:param[1],
                                        },
                                        {}
                                    )}></CommonHandleUserListComponent>
                                ) 
                                : 
                                (
                                    <></>
                                )
                            }
                            
                        </>
                    );
                },
            },
        }
        //console.log(localColumnsObj);
        const columns = Object.values(localColumnsObj);
        return (
            <>
                <Table rowSelection={ {...Object.assign(
                        {},
                        {
                            selectedRowKeys,
                        },
                        {
                            onChange : (selectedRowKeys)=>{
                                //数组转对象
                                toSelectedRowKeys(selectedRowKeys);
                            }
                        }
                    )}}   
                    scroll={{ x: "100%"}} 
                    getPopupContainer={triggerNode => triggerNode.parentNode}
                    dataSource={dataSource} 
                    columns={columns} 
                    pagination={false}
                    bordered
                    sticky
                    loading = {false}
                    title={
                        (node) => {
                            const style = {
                                fontSize:"16px",
                                fontWeight : "800",
                                color:"red",
                                paddingLeft:"5px",
                                paddingRight:"5px",
                            }
                            const currentNum = node.length;
                            const currentTotalAge = node.reduce( (prev,item)=>{
                                return prev += parseInt(item.age);
                            },0 )
                            return (
                                <div>
                                    共
                                    <span style={style}>{total}</span>
                                    条记录，当前显示
                                    <span style={style}>{currentNum}</span>
                                    条，当前页年龄总和：
                                    <span style={style}>{currentTotalAge}</span>
                                </div>
                            )
                        } 
                    }
                 />
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        UserTreeOptionsData : store.UserTreeOptionsData,
    }),{

    }
)( withRouter( CommonTable ) )
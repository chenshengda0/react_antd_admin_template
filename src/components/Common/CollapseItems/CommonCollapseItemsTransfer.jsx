import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonCollapseItemsTransfer.scss"
import {
    Row,
    Col,
    Transfer,
} from "antd"
class CommonCollapseItemsTransfer extends Component{

    render(){

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
                <div className="CommonCollapseItemsTransferComponent">
                    <Row>
                        <Col span={24}>
                            <Transfer
                                dataSource={mockData}
                                titles={['隐藏', '显示']}
                                locale={{itemUnit: "项", itemsUnit: "项",}}
                                targetKeys={targetKeys}
                                selectedKeys={selectedKeys}
                                onChange={(nextTargetKeys)=>{
                                    transferChange({targetKeys:nextTargetKeys});
                                }}
                                onSelectChange={(sourceSelectedKeys, targetSelectedKeys)=>{
                                    transferChange({selectedKeys:[...sourceSelectedKeys, ...targetSelectedKeys]});
                                }}
                                render={item => item.title}
                            />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }

}

export default connect(
    store=>({
        SystemConfigData : store.SystemConfigData,
    }),{
        
    }
)( withRouter(CommonCollapseItemsTransfer) );